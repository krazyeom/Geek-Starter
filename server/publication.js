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

Meteor.publish('Uploads', function(){
      return Uploads.find();
});

Meteor.publish('events', function(projectId){
      return events.find({projectId: projectId});
});

events.allow({
  insert: function() {
    return true;
  }
});

Uploads.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return false;
  },
  download: function() {
    return true;
  }
});
