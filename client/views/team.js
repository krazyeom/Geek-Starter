var members = [
  {
    url: "img/team/3.jpg",
    name: "Jump",
    job: "Visual Developer"
  }, 
  {
    url: "img/team/2.png",
    name: "Steve",
    job: "Lead Developer"
  }, 
  {
    url: "img/team/3.png",
    name: "Tiffany",
    job: "Fashion Developer"
  }, 
  {
    url: "img/team/5.png",
    name: "Sun",
    job: "Happening Developer"
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
