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
  },
  messageForm: {
    after: {
      method: function(error, result) {
        vKiller.srollToBottom();
      }
    }
  }
});
Template.chats.helpers({
  chatsView: function() {
    var recipients = _.without(this.recipients, Meteor.userId());
    var names = [];
    _.each(recipients, function (id) {
      names.push(Meteor.users.findOne({_id: id}).username);
    });
    return '<a href="' + Router.path('chatroom', {_id: this._id}) + '">' + names.join(', ') + ' ' + Blaze._globalHelpers.formatDate(this.date) + '</a>';
  }
});

Template.messageForm.helpers({
  chatId: function () {
    return this._id;
  }
});
Template.chatroom.onRendered(function() {
  vKiller.srollToBottom();
});