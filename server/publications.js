Meteor.publish('posts', function(options) {
  return Posts.find({}, options);
});
Meteor.publish('users', function(options) {
  if (options && options.friends) {
    switch (options.friends) {
      case 'activeFriends':
      case 'followers':
      case 'followed':
        var query = {
          "_id": this.userId
        };
        query["friends." + options.friends] = {$exists: 1};
        var projection = {
          fields: {
            "_id": 0
          }
        };
        projection['fields']["friends." + options.friends] = 1;
        var friends = Meteor.users.findOne(query, projection);
        if (friends) {
          var idList = friends.friends[options.friends];
          if (options.friends == 'followers') {
            idList = [];
            _.each(friends.friends[options.friends], function (i, j) {
              if (i['id']) {
                idList.push(i['id']);
              }
            })
          }
          idList.push(this.userId);
          return Users.find({"_id": {$in: idList}}, {});
        }
        return;
    }
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