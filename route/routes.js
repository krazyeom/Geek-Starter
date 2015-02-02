Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'home', 
    template: 'home',
    waitOn: function() {
      return [
        Meteor.subscribe('projects'), Meteor.subscribe('users-by-selector'),
        Meteor.subscribe('comments')
      ];
    }

  }
);


Router.route('/start', 'start', 
  { 
    template: 'start',
  }
);

Router.route('/discover', 'discover', { 
    template: 'discover',
    waitOn: function() {
      return [
        Meteor.subscribe('projects'), Meteor.subscribe('users-by-selector'),
        Meteor.subscribe('comments')
      ];
    }
  }
);

Router.route('/project/:_id', {
  name: 'project',
  waitOn: function() {
    return  [
        Meteor.subscribe('projects'),
        Meteor.subscribe('comments')
      ];
  },
  data: function() {
    return Projects.findOne(this.params._id);
  }
});

Router.route('/jobs', function(){
  this.render('jobs');
  console.log("asdf");
});

Router.route('/login',
  { 
    template: 'loginButtons',
  }
);

Router.route('/signup',
  { 
    template: 'register',
  }
);

Router.onBeforeAction('dataNotFound', {only: 'project'});