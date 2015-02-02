Projects = new Mongo.Collection('projects');

Meteor.methods({
  add: function(title, description){
    Projects.insert({title: title, description: description, userId: this.userId});
  }
});
