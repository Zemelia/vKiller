Router.route('/profile/edit', {
  name: 'profile_edit',
  data: function() {
    return {
      user: Meteor.user()
    };
  }
});
Router.route('/profile', {
  name: 'myProfile',
  template: 'profile_view',
  data: function() {
    return {
      user: Meteor.user()
    };
  }
});
Router.route('/profile/:_id', {
  name: 'profile',
  template: 'profile_view',
  waitOn: function () {
    return [
      Meteor.subscribe('usersId', this.params._id)
    ];
  },
  data: function() {
    return {
      user: Users.findOne(this.params._id)
    };
  }
});