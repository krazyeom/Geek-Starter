if (Meteor.users.find().count() === 0){
  var userId = 'admin'
  , userName = 'Sungwook Yeom'
  , email = 'lego@samsung.com'
  , password = 'teamlego'
  , profile = {
    userName: userName,
    fundAmount: 1000000000,
    fundProject: []
  };
 // Trim and validate the input

  Accounts.createUser({username: userId, email: email, password : password, profile: profile});
}
if (Projects.find().count() === 0) {
  var userId = Meteor.users.find({username: 'admin'})._id;
  Projects.insert({
    title: 'Geek Starter', 
    description: '프로젝트 및 아이디어 펀딩을 위한 서비스', 
    userId: userId,
    userName: userName,
    submitted: new Date(),
    fundAmount: 33333333,
    fundRiser: [],
    fundRiserCount: 33,
    fundGoal: 1000000000
  });
}