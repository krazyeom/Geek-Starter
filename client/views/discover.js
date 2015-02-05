Template.discover.helpers({
  projectsCount: function(){
    //FIXME: 전체 프로젝트 숫자를 가져올려면 다른.. 계획이.. 
    return Projects.find().count();
  }
});

Template.discover.rendered = function () {
  $.material.init();
};

