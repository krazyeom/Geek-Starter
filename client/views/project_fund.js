Template.projectfund.events({
  'submit form': function (e, template) {
    e.preventDefault();
    //TODO: ... 펀딩 메소드

    //성공하면 라우팅
    var fundAmount = $(e.target).find('#fundAmount').val().trim();

    if (fundAmount == undefined || fundAmount === '' || fundAmount <= 0){
      alert("incorrect fund amount. Please enter the fund amount correctly.");
      return;
    }

    if (Meteor.user().profile.fundAmount < fundAmount) {
       alert("incorrect fund amount. Please enter the fund amount correctly.");      
       return;      
    }

    if (fundAmount > 100000000000) {
       alert("incorrect fund amount. Please enter the fund amount correctly.");      
       return;
    }

    var project = {_id: this._id, fundAmount: fundAmount};
    Meteor.call('fundProject', project, function (error, result) {
      if (error) {
        console.log (error);
        return;
      };
    });

    Router.go('project', {_id: this._id});
  }
});

Template.projectfund.rendered = function () {
  $.material.init();
};

