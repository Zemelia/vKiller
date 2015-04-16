vKiller.Menus['mainMenu'] = [
  {
    'title': 'People',
    'path': 'people',
    'children': [
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
      }]
  },
  {
    'title': 'Posts',
    'path': 'posts'
  },
  {
    'title': 'Chats',
    'path': 'chats'
  },
  {
    'title': 'Profile',
    'path': '#',
    'children': [
      {
        'title': 'Profile edit',
        'path': 'profile_edit'
      }
    ]
  }
];

_.each(vKiller.Menus, function (i, j) {
  menuSetLink(i);
});

function menuSetLink(i) {
  _.each(i, function (menu) {
    menu.link = Router.path(menu.path);
    if (menu.children) {
      menuSetLink(menu.children)
    }
  });
}
