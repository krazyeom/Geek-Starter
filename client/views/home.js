Template.home.helpers({
});

Template.home.rendered = function () {
  $.material.init();

  var theater = new TheaterJS();

  theater
    .describe("Vader", .8, "#vader")
    .describe("Luke", .6, "#luke");

  theater
    .write("Vader:Hello. there", 600)
    .write("Luke:Hi", 400)
    .write("Vader:Hmm...", 400)
    .write("Vader:Do you have any Idea!?", 400)
    .write("Luke:Yes", 400)
    .write("Luke:I will show you my Idea!", 400)
    .write("Vader:Bring your creative project to SDS", 600)
    .write(function () { theater.play(true); });


  theater
    .on("say:start, erase:start", function () {
      // add blinking caret
    })
    .on("say:end, erase:end", function () {
      // remove blinking caret
    })
    .on("*", function () {
      // do something
    });
};
