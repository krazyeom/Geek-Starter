Comments = new Mongo.Collection('comments');

Meteor.methods({
  addComment: function(comment) {
    console.log(comment);

    // check(this.userId, String); check(commentAttributes, {
    //   postId: String,
    //   body: String
    // });

//     Comments.insert({
// projectId: "mgc2Ka6kEBqaRExTc",
// userId: "RvNYSamJgt6WRqgon",
// author: "Steve",
// submitted: new Date,
// body: 'Interesting project Sacha, can I get involved?'
//      });
//   }
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