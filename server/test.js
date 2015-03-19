if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  Posts.insert({
    title: 'Introducing Telescope',
    author: 'buu',
    date:  new Date(now),
    summary: 'Buuuuuu'
  });
}