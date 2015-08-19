Schemas = {};
Schemas.CreateChatroom = new SimpleSchema({
  message: {
    type: String,
    label: "Message",
    max: 1000
  },
  username: {
    type: [String],
    label: "Username"
  }
});
Schemas.sendMessage = new SimpleSchema({
  message: {
    type: String,
    label: "Message",
    max: 1000
  },
  chatId: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "hidden"
      }
    }
  }
});