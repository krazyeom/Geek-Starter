Uploads = new FS.Collection("Uploads", {
  stores: [new FS.Store.FileSystem("Uploads", {path: "~/uploads"})]
});

events = new Meteor.Collection('events');
