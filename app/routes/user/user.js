Router.route('/profile/edit', {
  name: 'profile_edit',
  waitOn: function() {
    Meteor.subscribe('users');
  },
  data: function() {
    return {
      users: Users.findOne({"_id": Meteor.userId()})
    };
  }
});