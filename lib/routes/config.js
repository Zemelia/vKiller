Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {
    return [Meteor.subscribe('chatroom')];
  }
});