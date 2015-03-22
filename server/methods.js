Meteor.methods({
  createChat: function(doc) {
    var chatExists = chatRoom.findOne({recipients: [Meteor.user()._id, doc.username]});
    if (!chatExists) {
      console.log('aa')
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
  }
});