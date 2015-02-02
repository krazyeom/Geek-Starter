Meteor.publish('projects', function(_id) {
  console.log("_id: " + _id);
  if (_id) {
    return Projects.find({_id: _id});
  } else {
    return Projects.find({});  
  }
  
});

Meteor.publish('users-by-selector', function() {
  return Meteor.users.find({}, {username: 1});
});

Meteor.publish('comments', function() {
  return Comments.find({});
});
