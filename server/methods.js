Meteor.methods({
  createChat: function(doc) {
    var chatExists = chatRoom.findOne({recipients: [Meteor.user()._id, doc.username]});
    if (!chatExists) {
      var newChat = {
        recipients: [Meteor.user()._id, doc.username],
        date: new Date(),
        messages: [{
          message: doc.message,
          author: Meteor.user().username,
          date: new Date()
        }]
      };

      var chatroomId = chatRoom.insert(newChat);
      return {
        _id: chatroomId
      };
    } else {
      return {
        chatExists: true,
        _id: chatExists._id
      };
    }
  },
  sendMessage: function (doc) {
    check(doc, Schemas.sendMessage);
    chatRoom.update(doc.chatId,
      {$addToSet: {
        messages: {
          message: doc.message,
          author: Meteor.user().username,
          date: new Date()
        }
      }}
    );
  },
  getUsernames: function(query) {
    result = [];
    if (query != '') {
      var result = Meteor.users.find({
        username: {
          $regex: '^.*' + query + '.*$'
        }
      }).fetch();
    }
    return result;
  },
  followUser: function(id, followed_id, add) {
    if (add) {
      Users.update({"_id": id}, {$addToSet: {"friends.followed": followed_id}});
      Users.update({"_id": followed_id}, {$addToSet: {"friends.followers": {"id" :id, "notice": true}}});
    } else {
      Users.update({"_id": id}, {$pull: {"friends.followed": followed_id}});
      Users.update({"_id": followed_id}, {$pull: {"friends.followers": {"id" :id}}});
    }
  }
});