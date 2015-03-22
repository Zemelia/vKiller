Schema = {};
SchemaCreateChatroom = new SimpleSchema({
  message: {
    type: String,
    label: "Message",
    max: 1000
  },
  username: {
    type: String,
    label: "Username",
    max: 20
  }
});