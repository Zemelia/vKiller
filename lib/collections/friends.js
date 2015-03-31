frienRequests = new Mongo.Collection('frienRequests');
frienRequestsSchema = new SimpleSchema({
  subscriber: {
    type: String,
    label: "Author"
  },
  user: {
    type: String,
    label: ""
  },
  message: {
    type: String,
    label: "Text",
    max: 1000,
    optional: true
  }
});
chatRoom.attachSchema(frienRequestsSchema);