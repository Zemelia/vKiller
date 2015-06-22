Template.imageField.events({
  'upload input[type="file"]': function (event, tmpl) {
    FS.Utility.eachFile(event, function (file) {
      Images.insert(file, function (err, fileObj) {
        if (fileObj) {
          tmpl.find('input[name="' + tmpl.data.name + '"]').value = fileObj._id;
        } else {}
      })
    });
  },
  'click button[type="submit"]': function (event, tmpl) {
    tmpl.$('input[type="file"]').trigger('upload');
    return false;
  }
});

Template.imageField.helpers({
  userImage: function () {
    return Images.findOne({_id: this.value});
  }
});

AutoForm.addInputType("imageField", {
  template: "imageField",
  valueOut: function () {
    return this.val();
  }
});
