Meteor.publish('posts', function(options) {
  return Posts.find({}, options);
});
Meteor.publish('users', function(options) {
  if (_.isNull(this.userId)) {
    return;
  }
  if (options && options.friends) {
    var mod = options.friends;
    switch (options.friends) {
      case 'activeFriends':
        mod = 'activeFriends';
        break;
      case 'followers':
        mod = 'followed';
        break;
      case 'followed':
        mod = 'followers.id';
        break;
    }
    var query = {};
    query['friends.' + mod] = this.userId;
    return Users.find(query, {});
  }
  return Meteor.users.find({});
});
Meteor.publish('chatroom', function() {
  return chatRoom.find({recipients: this.userId});
});
Meteor.publish('chatroomId', function(id) {
  check(id, String);
  return chatRoom.find(id);
});