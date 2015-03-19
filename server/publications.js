Meteor.publish('posts', function(options) {
  return Posts.find({}, options);
});
Meteor.publish('users', function(options) {
  return Meteor.users.find({}, options);
});