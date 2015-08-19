Template.userImage.helpers({
  userImage: function(userId) {
    var image = '';
    var userObj = {};
    if (this.userId) {
      userObj = Meteor.users.findOne({_id: this.userId})
    } else {
      userObj = (this.user) ? this.user : this;
    }
    if (!_.isEmpty(userObj) && !_.isUndefined(userObj.profile) && !_.isEmpty(userObj.profile.pictureId)) {
      image =  Images.findOne({_id: userObj.profile.pictureId});
    }
    return image;
  }
});

