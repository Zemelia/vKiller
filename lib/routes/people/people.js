Router.route('/friends', {
  name: 'friends',
  waitOn: function() {
    Meteor.subscribe('users');
  },
  data: function() {
    return {
      users: Meteor.users.find()
    };
  }
});