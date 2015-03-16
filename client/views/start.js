Template.startForm.events({
  'submit form': function(e, tmp){
    e.preventDefault();
    var title = $(e.target).find('#title').val().trim();
    var desc = $(e.target).find('#desc').val().trim();
    // var fundGoal = $(e.target).find('#fundGoal').val().trim();
    // var developerNumber = $(e.target).find('#developerNumber').val();
    // var designerNumber = $(e.target).find('#designerNumber').val();

    // console.log(developerNumber);
    // console.log(designerNumber);
    if (title == undefined || title === '' || title.length === 0){
      alert("Incorrect title. Please input the description title.");
      return;
    }

    if (desc == undefined || desc === '' || desc.length === 0){
      alert("Incorrect description. Please input the description correctly.");
      return;
    }

    // if (fundGoal == undefined || fundGoal === '' || fundGoal <= 0){
    //   alert("Incorrect fund goal. Please enter the fund goal correctly.");
    //   return;
    // }

    var projectId = tmp.data ? tmp.data._id : '';

    var project = {
      projectId: projectId,
      title: title,
      description: desc,
      fundGoal: 0,
      developerNumber: 0,
      designerNumber: 0
    }

    if (projectId) {
      Meteor.call('updateProject', project, function(err, result){
        if (err) {
          console.log(err);
        }

        Router.go('project', {_id: project.projectId});
      });
    } else {
      Meteor.call('addProject', project, function(err, result){
        if (err) {
          console.log(err);
        }

        Router.go('discover');
      });
    }
  }
});

Template.startForm.rendered = function () {
  $.material.init();
};
