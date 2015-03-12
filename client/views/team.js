var members = [
  {
    url: "img/team/2.jpg",
    name: "Keen",
    job: "King Developer"
  }, 
  {
    url: "img/team/2.png",
    name: "Steve",
    job: "Lead Developer"
  }, 
  {
    url: "img/team/DSC05729.jpg",
    name: "Alex",
    job: "Ganji Developer"
  }
  ];

var contributers = [
  {
    url: "img/team/2.jpg",
    name: "Keen",
    job: "King"
  }];

Template.members.helpers({
  members: function() {
    return members;
  }
});

Template.contributers.helpers({
  contributers: function() {
    return contributers;
  }
});
