Template.project.helpers({
  comments: function() {
    return Comments.find({projectId: this._id}, {sort: {submitted: -1}});
  },
  username: function() {
    return Meteor.user().profile.userName;
  }
});

Template.fileUpload.helpers({
  uploads:function(){
      _this = this;
      var array = [];
      var files = events.find({}).fetch();
      $(files).each(function(){
        array[array.length] = this.file.getFileRecord();
      });

    return array;
  }
});

Template.project.rendered = function () {
  $.material.init();
};

Template.commentItem.helpers({
  submittedText: function() {
    return this.submitted.toString();
  }
});

Template.fileUpload.events({
  'click .fileUpload': function (event, template) {

  var file = template.find('.fileInput').files[0];
  var file2 = new FS.File(file);
  if (file && file2) {
    file = new FS.File(file);
    var projectId = this._id;

    Uploads.insert(file, function(err, fileObj){
      events.insert({
          projectId: projectId ,
          file: fileObj
        });
    })
    }
  }
});

addComment = function(e, template) {
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
      $body.val('');
    }
  });
}

Template.commentSubmit.events({
  'submit form': function (e, template) {
    e.preventDefault();
    addComment(e, template);
  },
  'keydown #commentBody': function(e, template) {
    if (e.keyCode === 13) {
      addComment(e, template);
    }
  }
});

Template.join.events({
  'click #developerJoin': function(e, template) {
    e.preventDefault();
    template.$('#developerJoin').addClass('disabled');
    template.$('#designerJoin').addClass('disabled');

    // $(e.target).addClass('disabled');
  },
  'click #designerJoin': function(e, template) {
    e.preventDefault();
    template.find('#designerJoin').addClass('disabled');
    // $(e.target).addClass('disabled');
  }
});


Template.fund.helpers({
  percent: function () {
    return Math.round(this.fundAmount / this.fundGoal * 100);
  }
});

Template.fund.rendered = function () {
  $.material.init();
};
