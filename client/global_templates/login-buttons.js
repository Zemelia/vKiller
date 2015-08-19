Template.loginButtons.events({
  'click a.logout': function () {
    Meteor.logout();
    return false;
  }
});
Template.logoutButton.events({
  'click .pwd-change': function () {
    $('#modal-pwd-change').openModal();

    return false;
  }
});
Template.loginButton.onRendered(function() {
  $('.modal-trigger').leanModal();
});