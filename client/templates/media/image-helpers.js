Template.imageField.events({
  'change input[type="file"]': function (event, template) {
    FS.Utility.eachFile(event, function (file) {
      Images.insert(file, function (err, fileObj) {
        if (fileObj) {
          template.find('input[name="' + template.data.name + '"]').value = fileObj._id;
        } else {}
      })
    });
  }
});
if (Meteor.isClient) {
  AutoForm.addInputType("imageField", {
    template: "imageField",
    valueOut: function () {
      return this.val();
    }
  })
}