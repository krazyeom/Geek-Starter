Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'home', 
    template: 'home'
  }
);


Router.route('/start', 'start', 
  { 
    template: 'start',
  }
);

Router.route('/discover', 'discover', 
  { 
    template: 'discover',
  }
);

Router.route('/jobs', function(){
  this.render('jobs');
  console.log("asdf");
});
