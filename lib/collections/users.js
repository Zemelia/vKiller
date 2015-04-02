Users = Meteor.users;
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
  }
});
Users.attachSchema(usersSchema);