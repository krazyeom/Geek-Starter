Template.start.helpers({

});


Template.start.events({
  'click button[type="submit"]': function(e, tmp){
    e.preventDefault();
    var title = $('#title').val();
    var desc = $('#desc').val();
    Meteor.call('add', title, desc, function(err, result){
      if (err) {
        // console.log(err);
        return console.log(err);
      } 

      console.log(result);

      Router.go('discover');
    });
  }
});

Template.start.rendered = function () {
  $.material.init();
};

