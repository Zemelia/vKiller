Template.friends.events({
  'click .follow, click .accept, click .decline, click .unfollow, click .remove': function (e) {
    var hrefArr = e.currentTarget.href.split('/');
    var userId = _.last(hrefArr);
    var type = hrefArr.splice(-2,1)[0];
    if (userId && type) {
      Meteor.call('followUser', Meteor.userId(), userId, type);
    }
    return false;
  }
});

Template.friends.helpers({
  followLink: function () {
    var user = Meteor.user();
    if (checkObjectExists(user, 'friends.followers') && _.contains(_.pluck(user.friends.followers, 'id'), this._id)) {
      return Blaze._globalHelpers.linkGenerate('<i class="fa fa-check-circle"></i>Accept', 'accept/' + this._id, "accept");
    }
    if (checkObjectExists(user, 'friends.followed') && _.contains(user.friends.followed, this._id)) {
      return Blaze._globalHelpers.linkGenerate('<i class="fa fa-eye-slash"></i>Unfollow', 'unfollow/' + this._id, "unfollow");
    }
    if (checkObjectExists(user, 'friends.activeFriends') && _.contains(user.friends.activeFriends, this._id)) {
      return Blaze._globalHelpers.linkGenerate('<i class="fa fa-minus-circle"></i>Remove', 'remove/' + this._id, "remove");
    }
    return Blaze._globalHelpers.linkGenerate('<i class="fa fa-eye"></i>Follow', 'follow/' + this._id, "follow")
  }
});