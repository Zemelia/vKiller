vKiller.srollToBottom = function () {
  setTimeout(function () {
    window.scrollTo(0, document.body.scrollHeight);
  }, 50);
};
Meteor.startup(function() {
  $('.tooltipped').tooltip({delay: 50});
});