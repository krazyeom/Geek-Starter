Template.register.events({
  'submit #register-form' : function(e, t) {
    e.preventDefault();
    var userId = t.find('#account-userid').value
      , email = t.find('#account-email').value
      , password = t.find('#account-password').value
      , profile = {fundAmount: 10000000};
      // Trim and validate the input

    Accounts.createUser({username: userId, email: email, password : password, profile: profile}, function(err){
      if (err) {
        // Inform the user that account creation failed
      } else {
        // Success. Account has been created and the user
        // has logged in successfully. 
        Router.go('home');
      }
    });
    return false;
  }
});