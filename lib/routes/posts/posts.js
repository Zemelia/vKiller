Router.route('/posts', {
  name: 'posts',
  waitOn: function() {
    Meteor.subscribe('posts');
  },
  data: function() {
    return {posts: Posts.find()};
  }
});