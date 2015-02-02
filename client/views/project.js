Template.project.helpers({
  comments: function() {
    return Comments.find({projectId: this._id}, {sort: {submitted: -1}});
  }
});

Template.project.rendered = function () {

};

Template.commentItem.helpers({
  submittedText: function() {
    return this.submitted.toString(); 
  }
});

Template.commentSubmit.events({
  'submit form': function (e, template) {
    e.preventDefault();
    var $body = $(e.target).find("#commentbody");
    
    if ($body.val().trim().length === 0) {
      alert("Please enter comment");
      return;
    };

    var comment = {
      body: $body.val(),
      projectId: template.data._id
    };

    Meteor.call('addComment', comment, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        $body.val('');
      }
    });
  },
  'keydown #commentBody': function(e, template) {
    if (e.keyCode === 13) {
      var $body = $(e.target).find("#commentbody");
      
      if ($body.val().trim().length === 0) {
        alert("Please enter comment");
        return;
      };

      var comment = {
        body: $body.val(),
        projectId: template.data._id
      };

      Meteor.call('addComment', comment, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
          $body.val('');
        }
      });

    }
  }
});