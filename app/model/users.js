Users = Meteor.users;
userProfileSchema = new SimpleSchema({
  firstName: {
    type: String,
    regEx: /^[a-zA-Z-]{2,25}$/,
    optional: true,
    autoform: {
      label: false,
      placeholder: "schemaLabel"
    }
  },
  lastName: {
    type: String,
    regEx: /^[a-zA-Z]{2,25}$/,
    optional: true,
    autoform: {
      label: false,
      placeholder: "schemaLabel"
    }
  },
  pictureId: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "fileUpload",
        collection: "Images"
      }
    }
  },
  birthday: {
    type: Date,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ['Male', 'Female'],
    autoform: {
      class: "browser-default",
      type: "select",
      options: "allowed",
      firstOption: "- Select your gender -"
    }
  }
});
var usersSchema = new SimpleSchema({
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },
  emails: {
    type: [Object],
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  friends: {
    type: new SimpleSchema({
      activeFriends: {
        type: [String],
        optional: true
      },
      followers: {
        type: [new SimpleSchema({
          id: {
            type: String
          },
          notice: {
            type: Boolean
          }
        })],
        optional: true
      },
      followed: {
        type: [String],
        optional: true
      }
    }),
    optional: true
  },
  profile: {
    type: userProfileSchema,
    optional: true
  }
});
Users.attachSchema(usersSchema);