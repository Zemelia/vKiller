AutoForm.addInputType('vkiller-autocomplete', {
  template: 'vkillerAutocomplete'
});
Template.vkillerAutocomplete.helpers({
  settings: function() {
    return {
      position: "bottom",
      limit: 5,
      rules: [
        {
          collection: Meteor.users,
          field: "username",
          template: Template.userPill,
          matchAll: true
        },
        {
          token: ', ',
          collection: Meteor.users,
          field: "username",
          template: Template.userPill,
          matchAll: true
        }
      ]
    };
  },
  recipients: function () {
    return vkillerAutocompleteRecepients.find({}).fetch();
  }
});

Template.vkillerAutocomplete.events({
  'autocompleteselect input': function (event, template, doc) {
    if (!vkillerAutocompleteRecepients.findOne({_id: doc._id})) {
      vkillerAutocompleteRecepients.insert(doc)
    }
    template.$('input[type="autocomplete-input"]').val('');
    Template.vkillerAutocomplete.updateInput(template);

  },
  'click .recipients-names .username': function (event, template, doc) {
    vkillerAutocompleteRecepients.remove({_id: this._id})
    Template.vkillerAutocomplete.updateInput(template);
  }
});
Template.vkillerAutocomplete.updateInput = function (template) {
  var $input = template.$('input[name="' + template.data.name + '"]');
  var inputValue = vkillerAutocompleteRecepients.find({}, {'fields': {_id: 1}}).map(function (data) {
    return data._id;
  });
  $input.val(inputValue.toString())
};

Template.vkillerAutocomplete.onCreated(function () {
  vkillerAutocompleteRecepients = new Mongo.Collection(null);
});