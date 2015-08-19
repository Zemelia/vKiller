Template.profileEdit.helpers({
  images: function () {
    return Images.find();
  },
  thisDoc: function (b) {
    return this.user.profile;
  }
});
Template.profileView.helpers({
  profile: function () {
    var profile = _.map(this.user.profile, function (v, k) {
      return v;
    });
    console.log(profile)
    return profile;
  }
});