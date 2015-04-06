Template.friends.events({
  'click .follow, click .accept, click .decline, click .unfollow ,click .remove': function (e) {
    var hrefArr = e.currentTarget.href.split('/');
    var userId = _.last(hrefArr);
    var type = hrefArr.splice(-2,1);
    if (userId && type) {
      Meteor.call('followUser', Meteor.userId(), userId, type);
    }
    return false;
  }
});

Template.friends.helpers({
  followLink: function () {
    var user = Meteor.user();
    if (checkObjectExists(user, 'friends.followers')
  && _.contains(_.pluck(user.friends.followers, 'id'), this._id)) {
      var accept = Blaze._globalHelpers.linkGenerate("Accept", 'accept/' + this._id, "accept");
      var decline = Blaze._globalHelpers.linkGenerate("Decline", 'decline/' + this._id, "decline");
      return accept + ' | ' + decline;
    }
    if (checkObjectExists(user, 'friends.followed')
      && _.contains(user.friends.followed, this._id)) {
      return Blaze._globalHelpers.linkGenerate("Unfollow", 'unfollow/' + this._id, "unfollow");
    }
    if (checkObjectExists(user, 'friends.activeFriends')
      && _.contains(user.friends.activeFriends, this._id)) {
      return Blaze._globalHelpers.linkGenerate("Remove", 'remove/' + this._id, "remove");
    }
    return Blaze._globalHelpers.linkGenerate("Follow", 'follow/' + this._id, "follow")
  }
});