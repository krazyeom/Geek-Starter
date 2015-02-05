Template.fundDetail.helpers({
  percent: function () {
    return Math.round(this.fundAmount / this.fundGoal * 100);
  }
});

Template.projects.rendered = function () {
  $.material.init();
};
