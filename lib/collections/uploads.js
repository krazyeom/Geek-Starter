Uploads = new FS.Collection("Uploads", {
  filter: {
      maxSize: 10485760, // in bytes
      onInvalid: function (message) {
        if (Meteor.isClient) {
          alert(message);
          return;
        } else {
          console.log(message);
        }
      }
  },
  stores: [new FS.Store.FileSystem("Uploads", {path: "~/uploads"})]
});

events = new Meteor.Collection('events');
