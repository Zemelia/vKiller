Template.friends.events({
  'click .follow': function () {
    console.log(this)
    if (this._id) {
      console.log(this._id)
      //Meteor.call('followUser', Meteor.userId(), this._id, true);
    }
    return false;
  },
  'click .unfollow': function () {
    console.log(this)
    if (this._id) {
      console.log(this._id)
      //Meteor.call('followUser', Meteor.userId(), this._id, false);
    }
    return false;
  }
});

Template.people_item.helpers({
  followLink: function () {
    var user = Meteor.user();
    if (checkObjectExists(user, 'friends.followed') && _.contains(user.friends.followed, this._id)) {
      return Blaze._globalHelpers.linkGenerate("Unfollow", this._id, "unfollow")
    }
    return Blaze._globalHelpers.linkGenerate("add friend", this._id, "follow")
  }
});