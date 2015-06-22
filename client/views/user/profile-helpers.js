AutoForm.hooks({
  profileEdit: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
    }
  }
});

Template.profileEdit.helpers({
  userImage: function () {
    return Images.findOne({_id: this.user.profile.pictureId});
  },
  images: function () {
    return Images.find();
  },
  thisDoc: function () {
    return this.user.profile;
  }
});
Template.profileEdit.events({
  'click #remove_picture': function (e) {
    Meteor.call('removeImage', this.user.profile.pictureId);
    return false;
  }
});