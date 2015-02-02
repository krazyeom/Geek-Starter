Template.title.helpers({
  userName: function () {
    return Meteor.user().username;
  },
  userFundAmount: function() {
    return Meteor.user().profile.fundAmount;
  }
});

Template.title.events({
  'click #logout': function (evt) {
    evt.preventDefault();

    Meteor.logout(function (err){
      console.log(err);
    });
  }
});

Template.title.rendered = function () {
  $.material.init();
};
