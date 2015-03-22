this.renderUsers = function(x, query) {
  var txt;
  txt = '<td>' + x.username + '</td>';
  return txt.replace(query, "<b>$&</b>");
};
AutoForm.hooks({
  createChatroom: {
    after: {
      method: function(error, result) {
        if (result && result.chatExists) {
          alert('Chat already exists.')
          Router.go('chatroom', {_id: result._id});
        }
      }
    }
  }
});
Template.chatroom.helpers({
  buu: function() {
    console.log(this)
  }
});