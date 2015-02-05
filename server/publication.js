Meteor.publish('projects', function() {
  //FIXME: 추후 프로젝트가 많아지면 limit를 줘야할 듯
  return Projects.find({});  
});

Meteor.publish('users-by-selector', function() {
  return Meteor.users.find({}, {username: 1});
});

Meteor.publish('comments', function() {
  return Comments.find({});
});
