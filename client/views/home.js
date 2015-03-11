Template.home.helpers({
});

Template.home.rendered = function () {
  $.material.init();

  var theater = new TheaterJS();

  theater
    .describe("Vader", .8, "#vader")
    .describe("Luke", .6, "#luke");

  theater
    .write("Vader:Hello.", 300)
    .write("Vader:Good evening :]", 300)
    .write("Luke:Hi...", 300)
    .write("Luke:but it's friday", 300)
    .write("Vader:Hmm...", 300)
    .write("Vader:Do you have a grate Idea!?", 300)
    .write("Luke:Yes", 300)
    .write("Luke:I will show you my Idea!", 300)
    .write("Vader:Do you like a pizza & beer?!", 300)
    .write("Luke:Sure!", 300)
    .write("Vader:Enjoy friday evening!", 300)
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
