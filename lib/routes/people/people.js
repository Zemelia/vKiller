Router.route('/', {
  name: 'people',
  template: 'friends',
  waitOn: function() {
    Meteor.subscribe('users');
  },
  data: function() {
    return {
      users: Users.find({"_id": {$ne: Meteor.userId()}})
    };
  }
});
Router.route('/friends', {
  name: 'friends',
  waitOn: function() {
    Meteor.subscribe('users', {friends: 'activeFriends'});
  },
  data: function() {
    return {
      users: Users.find({"_id": {$ne: Meteor.userId()}})
    };
  }
});
Router.route('/followed', {
  name: 'followed',
  template: 'friends',
  waitOn: function() {
    Meteor.subscribe('users', {friends: 'followed'});
  },
  data: function() {
    return {
      users: Users.find({"_id": {$ne: Meteor.userId()}})
    };
  }
});
Router.route('/followers', {
  name: 'followers',
  template: 'friends',
  waitOn: function() {
    Meteor.subscribe('users', {friends: 'followers'});
  },
  data: function() {
    return {
      users: Users.find({"_id": {$ne: Meteor.userId()}})
    };
  }
});