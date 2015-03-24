Template.registerHelper('formatDate', function(date, format) {
  if (!_.isUndefined(format)) {
    format = 'DD/MM/YYYY HH:MM:SS';
  }
  return moment(date).format(format);
});