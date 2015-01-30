Template.home.helpers({
  test: "test"
});

Template.home.rendered = function () {
  IRLibLoader.load("http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js");
  IRLibLoader.load("js/classie.js");
  IRLibLoader.load("js/cbpAnimatedHeader.js");
  IRLibLoader.load("js/jqBootstrapValidation.js");
  IRLibLoader.load("js/contact_me.js");
  IRLibLoader.load("js/agency.js");
};

Template.body.rendered = function() {
  $.material.init();
};
