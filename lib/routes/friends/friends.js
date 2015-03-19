Router.route('/friends', {
  name: 'friends',
  waitOn: function() {
    Meteor.subscribe('users');
  },
  data: function() {
    var buu =  Meteor.users.find();
    console.log(buu)
    return Meteor.users.find();
  }
});