Stores = {};
Stores.images = new FS.Store.GridFS("images");
Stores.thumbs = new FS.Store.GridFS("thumbs", {
  beforeWrite: function(fileObj) {
    // We return an object, which will change the
    // filename extension and type for this store only.
    return {
      extension: 'png',
      type: 'image/png'
    };
  },
  transformWrite: function(fileObj, readStream, writeStream) {
    // Transform the image into a 60px x 60px PNG thumbnail
    gm(readStream).resize(100, null).stream('PNG').pipe(writeStream);
    // The new file size will be automatically detected and set for this store
  }
});
Stores.avatars = new FS.Store.GridFS("avatars", {
  beforeWrite: function(fileObj) {
    // We return an object, which will change the
    // filename extension and type for this store only.
    return {
      extension: 'png',
      type: 'image/png'
    };
  },
  transformWrite: function(fileObj, readStream, writeStream) {
    // Transform the image into a 100px x 100px PNG thumbnail
    gm(readStream).resize(60, null).stream('PNG').pipe(writeStream);
    // The new file size will be automatically detected and set for this store
  }
});
Images = new FS.Collection("images", {
  stores: [Stores.images, Stores.thumbs, Stores.avatars]
});
Images.allow({
  insert: function(){
    return true;
  },
  remove: function(){
    return true;
  },
  update: function(){
    return true;
  },
  download: function () {
    return true;
  },
  fetch: null
});