var App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend();
App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

App.User = Ember.Object.extend({
    firstName: null,
    lastName: null,
    userName: null,
    email: null
});

App.MenuItem = Ember.Object.extend({

});

App.MenuItemController = Ember.ArrayController.create({
    // Content array for Ember's data
    content: []
});

App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
})

App.initialize();