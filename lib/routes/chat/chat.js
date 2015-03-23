Router.route('/chats', {
  name: 'chats',
  waitOn: function () {
    return [
      Meteor.subscribe('chatroom'),
      Meteor.subscribe('users')
    ];
  },
  data: function() {
    return {
      chats: chatRoom.find()
    }
  }
});
Router.route('/chatroom/add', {
  name: 'createChatroom'
});
Router.route('/chatroom/:_id', {
  name: 'chatroom',
  waitOn: function () {
    return [
      Meteor.subscribe('chatroomId', this.params._id),
    ];
  },
  data: function() {
    return chatRoom.findOne(this.params._id);
  }
});