Posts = new Mongo.Collection('posts');
var PostsSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  date: {
    type: Date,
    label: 'Post date'
  },
  summary: {
    type: String,
    label: "Text",
    max: 1000
  }
});
Posts.attachSchema(PostsSchema);