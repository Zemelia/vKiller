Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    //return [Meteor.subscribe('images')];
  },
  onBeforeAction: requireLogin
});