Comments = new Mongo.Collection('comments');

Meteor.methods({
  addComment: function(comment) {
    check(comment, {
      projectId: String,
      body: String
    });

    var user = Meteor.user();
    var project = Projects.findOne(comment.projectId);

    _.extend(comment, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });

    return Comments.insert(comment);
  }
});