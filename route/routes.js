Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home',
  template: 'home',
  waitOn: function() {
    return [
      Meteor.subscribe('projects'),
      Meteor.subscribe('comments'),
      IRLibLoader.load('/js/theater.js')
    ];
  },
  data: function() {
    return Projects.find({}, {limit: 9, sort: {submitted: -1}});
  }
});

Router.route('/start', {
  name: 'start',
  template: 'startProject'
});

Router.route('/discover', 'discover', {
  template: 'discover',
  waitOn: function() {
    return [
      Meteor.subscribe('projects'),
      Meteor.subscribe('comments')
    ];
  },
  data: function() {
    return Projects.find({}, {sort: {submitted: -1}});
  }
});

Router.route('/project/:_id', {
  name: 'project',
  waitOn: function() {
    return [
      Meteor.subscribe('projects'),
      Meteor.subscribe('Uploads'),
      Meteor.subscribe('events', this.params._id),
      Meteor.subscribe('comments')
    ];
  },
  data: function() {
    return Projects.findOne(this.params._id);
  }
});

Router.route('/project/:_id/fund', {
  name: 'projectfund',
  waitOn: function() {
    return [
      Meteor.subscribe('projects')
    ];
  },
  data: function() {
    return Projects.findOne(this.params._id);
  }
});

Router.route('/project/:_id/edit', {
  name: 'projectEdit',
  template: 'startProject',
  waitOn: function() {
    return [
      Meteor.subscribe('projects')
    ];
  },
  data: function() {
    return Projects.findOne(this.params._id);
  }
});

Router.route('/login', {
  template: 'login',
  waitOn: function() {
    return $.material.init();
  }
});

Router.route('/signup', {
  template: 'register',
  waitOn: function() {
    return $.material.init();
  }
});

Router.route('/jobs', function(){
  this.render('jobs');
});


var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

// var requireLoginTitlebar = function() {
//   if (Meteor.user()) {
//     this.next();
//   } else {
//     this.render('notLoginTitle');
//   }
// }

// Router.onBeforeAction(requireLoginTitlebar);
Router.onBeforeAction('dataNotFound', {only: 'project'});
Router.onBeforeAction(requireLogin, {only: 'start'});
