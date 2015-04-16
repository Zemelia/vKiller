Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images")]
});
Images.allow({
  download: function () {
    return true;
  },
  fetch: null
});