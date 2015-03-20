Router.route('/chatroom', {
  name: 'chatroom',
  data: function() {
    return {
      chats: chatRoom.find()
    }
  }
});
Router.route('/chatroom/add', {
  name: 'createChatroom'
});