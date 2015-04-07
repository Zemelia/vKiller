Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    //return [Meteor.subscribe('chatroom')];
  },
  onBeforeAction: requireLogin
});