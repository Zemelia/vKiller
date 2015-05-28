AutoForm.hooks({
  profileEdit: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
      console.log('aa')
    }
  }
});

Template.profileEdit.helpers({
  userImage: function () {
    return Images.findOne({_id: this.user.profile.pictureId});
  },
  images: function () {
    return Images.find();
  }
});
Template.profileEdit.events({
  'click #remove_picture': function (e) {
    Meteor.call('removeImage', this.user.profile.pictureId);
    return false;
  }
});