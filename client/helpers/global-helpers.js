Template.registerHelper('formatDate', function(date, format) {
  if (!_.isString(format)) {
    format = 'DD/MM/YYYY HH:MM:SS';
  }
  return moment(date).format(format);
});
Template.registerHelper('linkGenerate', function(title, href, className, id) {
  var className =  _.isString(className) ? ' class="' + className + '"' : '';
  var id =  _.isString(id) ? ' id="' + id + '"' : '';
  return '<a href="' + href + '"' + className + id + '>' + title + '</a>';

});
