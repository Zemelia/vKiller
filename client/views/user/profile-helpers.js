AutoForm.hooks(["profileEdit"],
  {
    before   : {
      method: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      method: CfsAutoForm.Hooks.afterInsert
    }

  }
);