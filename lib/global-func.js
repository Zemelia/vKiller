checkObjectExists = function(obj, prop) {
  var parts = prop.split('.');
  for(var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i];
    if(obj !== null && typeof obj === "object" && part in obj) {
      obj = obj[part];
    }
    else {
      return false;
    }
  }
  return true;
};

requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};