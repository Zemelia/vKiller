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
    },
    onError: function(error, buu, buu1) {
      console.log(error, buu, buu1)
    }
  }
});

function getRecepients(data, imagesWithNames) {
  var recipients = data.recipients;
  var names = [];
  var images = suffix = '';
  _.each(recipients, function (id) {
    var name = Meteor.users.findOne({_id: id}).username;
    names.push(name);
    if (imagesWithNames) {
      suffix = '<span class="name">' + name + '</span>';
    }
    images += '<span class="avatar">' + Blaze.toHTMLWithData(Template.userImage, {
      'userId': id,
      'imageStyle': 'avatars'
    }) + suffix + '</span>';
  });
  if (images.length) {
    images = '<div class="avatars">' + images + '</div>';
  }
  if (imagesWithNames) {
    names = '';
  } else {
    names = '<span class="recipients">' + names.join(', ') + '</span>';
  }
  return images + names;
}

Template.chats.helpers({
  chatsView: function() {
    var recipients = getRecepients(this);
    var date = '<span class="date">' + Blaze._globalHelpers.formatDate(this.date) + '</span>';
    return '<a href="' + Router.path('chatroom', {_id: this._id}) + '">' + date + recipients + '</a>';
  }
});

Template.message.helpers({
  time: function () {
    var time = Blaze._globalHelpers.formatDate(this.date, "HH:mm:ss");
    if (moment(this.date).diff(moment(), 'days') < 0) {
      time = Blaze._globalHelpers.formatDate(this.date, "D.MM.YY")
    }
    return time;
  },
  timeTitle: function () {
    return Blaze._globalHelpers.formatDate(this.date, "DD.MM.YY HH:mm:ss");
  }
});

Template.messageForm.helpers({
  chatId: function () {
    return this._id;
  }
});

Template.chatroom.helpers({
  recipients: function () {
    return getRecepients(this, true);
  }
});

Template.chatroom.onRendered(function() {
  vKiller.srollToBottom();
  var $form = $('.chatroom .message-form-wrapper');
  var formWidth = function($form) {
    $form.width($form.parent().width())
  };
  formWidth($form);
  $(window).bind('resize', function () {
    formWidth($form)
  });
  $('.tooltipped').tooltip({delay: 50});
  Template.chatroom.renderDone = true;
});

Template.message.onRendered(function() {
  if (Template.chatroom.renderDone) {
    vKiller.srollToBottom();
    $('.tooltipped').tooltip({delay: 50});
  }
});