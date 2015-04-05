vKiller.Menus['mainMenu'] = [
  {
    'title': 'People',
    'path': 'people'
  },
  {
    'title': 'Friends',
    'path': 'friends'
  },
  {
    'title': 'Followed',
    'path': 'followed'
  },
  {
    'title': 'Followers',
    'path': 'followers'
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
