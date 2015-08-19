Meteor.methods({
  createChat: function(doc) {
    var recipients = doc.username;
    recipients.push(Meteor.user()._id)
    recipients = _.uniq(recipients);
    var chatExists = chatRoom.find({recipients: {$all: recipients, $size: recipients.length}}).fetch();
    console.log(chatExists)
    if (!chatExists.length) {
      var newChat = {
        recipients: recipients,
        date: new Date(),
        messages: [{
          message: doc.message,
          author: Meteor.userId(),
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
        _id: chatExists[0]._id
      };
    }
  },
  sendMessage: function (doc) {
    check(doc, Schemas.sendMessage);
    chatRoom.update(doc.chatId,
      {$addToSet: {
        messages: {
          message: doc.message,
          author: Meteor.userId(),
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
  followUser: function(id, followed_id, type) {
    switch (type) {
      case 'follow':
        Users.update({"_id": id}, {$addToSet: {"friends.followed": followed_id}});
        Users.update({"_id": followed_id}, {$addToSet: {"friends.followers": {"id" :id, "notice": true}}});
        break;
      case 'unfollow':
        Users.update({"_id": id}, {$pull: {"friends.followed": followed_id}});
        Users.update({"_id": followed_id}, {$pull: {"friends.followers": {"id" :id}}});
        break;
      case 'accept':
        Users.update({"_id": id}, {$addToSet: {"friends.activeFriends": followed_id}, $pull: {"friends.followers": {"id" :followed_id}}});
        Users.update({"_id": followed_id}, {$addToSet: {"friends.activeFriends": id}, $pull: {"friends.followed": id}});
        break;
      case 'remove':
        Users.update({"_id": id}, {$pull: {"friends.activeFriends": followed_id}, $addToSet: {"friends.followers": {"id" :followed_id, "notice": false}}});
        Users.update({"_id": followed_id}, {$pull: {"friends.activeFriends": id}, $addToSet: {"friends.followed": id}});
        break;
    }
  },
  profileUpdate: function (doc) {
    Users.update({"_id": Meteor.user()._id}, {$set: {"profile": doc}})
  }
});