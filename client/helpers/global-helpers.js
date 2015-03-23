Template.registerHelper('formatDate', function(date, format) {
  if (!format) {
    format = 'DD/MM/YYYY HH:MM:SS';
  }
  return moment(date).format(format);
});