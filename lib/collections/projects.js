Projects = new Mongo.Collection('projects');

Meteor.methods({
  addProject: function(project){
    // check(project.fundGoal, Number);
    var userName = Meteor.users.findOne({_id: this.userId}).username;

    Projects.insert({
      title: project.title, 
      description: project.description, 
      userId: this.userId,
      userName: userName,
      submitted: new Date(),
      fundAmount: 0,
      fundRiser: [],
      fundRiserCount: 0,
      fundGoal: project.fundGoal,
      developerNumber: project.developerNumber,
      designerNumber: project.designerNumber,
      developer: [],
      designer: []
    });
  }, 
  fundProject: function(project){
    var query = {_id: project._id};

    var fundRiser = Projects.findOne(query).fundRiser;
    var hasRiser = _.contains(fundRiser, this.userId);

    var data = {};

    //이미 펀딩을 했는지 확인
    if (hasRiser) {
      data = {
        $addToSet: {fundRiser: this.userId}, 
        $inc: {fundAmount: project.fundAmount * 1}
      };
    } else {
      data = {
        $addToSet: {fundRiser: this.userId}, 
        $inc: {fundRiserCount: 1, fundAmount: project.fundAmount * 1}
      };
    }
    // Products.update(query, data);
    Projects.update(query, data);

    // 유저에게도 펀딩 정도 업데이트
    var query2 = {_id: this.userId};
    var data2 = {
      $addToSet: {"profile.fundProject": project._id}, 
      $inc: {"profile.fundAmount": project.fundAmount * -1}
    };
    Meteor.users.update(query2, data2);
  }
});
