chatRoom = new Mongo.Collection('chatroom');
var messageSchema = new SimpleSchema({
  author: {
    type: String,
    label: "Author"
  },
  date: {
    type: Date,
    label: 'Post date'
  },
  message: {
    type: String,
    label: "Text",
    max: 1000
  }
});
var chatRoomSchema = new SimpleSchema({
  recipients: {
    type: [String],
    label: "Recipients"
  },
  date: {
    type: Date,
    label: 'Post date'
  },
  messages: {
    type: [messageSchema]
  }
});
chatRoom.attachSchema(chatRoomSchema);