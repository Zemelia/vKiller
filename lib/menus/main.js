vKiller.Menus['mainMenu'] = [
  {
    'title': 'Friends',
    'path': 'friends'
  },
  {
    'title': 'Posts',
    'path': 'posts'
  },
  {
    'title': 'Chats',
    'path': 'chats'
  }
];

_.each(vKiller.Menus, function (i, j) {
  _.each(i, function (menu) {
    menu.link = Router.path(menu.path);
  });
});
