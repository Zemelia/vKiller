Router.route('/profile/edit', {
  name: 'profile_edit',
  waitOn: function() {
    //Meteor.subscribe('users');
  },
  data: function() {
    return {
      user: Meteor.user()
    };
  }
});