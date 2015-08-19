Template.menu.helpers({
  links: function () {
    return vKiller.Menus[this.menu];
  }
});

Template.menu_item.helpers({
  activeRouteClass: function() {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();

    var active = _.any(args, function(name) {
      return Router.current() && Router.current().route.getName() === name
    });
    return active && 'active ';
  }
});