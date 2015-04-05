Template.friends.events({
  'click a.follow': function (e) {
    var userId = _.last(e.currentTarget.href.split('/'));
    if (userId) {
      Meteor.call('followUser', Meteor.userId(), userId, true);
    }
    return false;
  },
  'click .unfollow': function (e) {
    var userId = _.last(e.currentTarget.href.split('/'));
    if (userId) {
      Meteor.call('followUser', Meteor.userId(), userId, false);
    }
    return false;
  }
});

Template.friends.helpers({
  followLink: function () {
    var user = Meteor.user();
    if (checkObjectExists(user, 'friends.followed') && _.contains(user.friends.followed, this._id)) {
      return Blaze._globalHelpers.linkGenerate("Unfollow", 'follow/' + this._id, "unfollow")
    }
    return Blaze._globalHelpers.linkGenerate("add friend", 'follow/' + this._id, "follow")
  }
});