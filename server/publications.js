Meteor.publish('posts', function(options) {
  return Posts.find({}, options);
});
Meteor.publish('images', function (options) {
  return Images.find();
});
Meteor.publish('users', function(options) {
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
    var query = {$or: [{"_id": this.userId}, {}]};
    query['$or'][1]["friends." + mod] = this.userId;
    return Users.find(query, {});
  }
  return Users.find({});
});
Meteor.publish('usersId', function(id) {
  return Users.find(id);
});
Meteor.publish('chatroom', function() {
  return chatRoom.find({recipients: this.userId});
});
Meteor.publish('chatroomId', function(id) {
  check(id, String);
  return chatRoom.find(id);
});