Projects = new Mongo.Collection('projects');

Meteor.methods({
  testAdd: function(){
    lconsole.log('call testAdd ');
  }
});
