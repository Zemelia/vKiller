var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 5,
  },
  {
    _id: 'email',
    type: 'email',
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email',
  },
  {
    _id: 'username_and_email',
    type: 'text',
    required: true,
    displayName: "Login",
  },
  {
    _id: 'current_password',
    type: 'password',
    required: true,
    displayName: "Current password"
  },
  pwd
]);
AccountsTemplates.configure({
  onSubmitHook: function (error, state) {
    if (!error) {
      $('.modal').closeModal();
    }
  },
  defaultState: 'signIn'
});
AutoForm.addHooks(null, {
  onError: function(formType, error) {
    if (formType == 'pre-submit validation') {
      console.log(error.message)
      Materialize.toast(error.message, 4000)
      return false
    }
  }
});
