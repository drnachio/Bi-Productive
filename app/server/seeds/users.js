Meteor.startup(function() {
  if(!Meteor.users.find().count()) {
    
    var info = {
      username: 'DRNachio', 
      password: '1234', 
      email: 'nacho@binpar.com',
      profile: {name: 'Ignacio Ferro Picón'}
    };

    var id = Accounts.createUser(info);

    Roles.addUsersToRoles(id, ['superadmin','administración','manager','producción'], 'binpar.com');    
  }
});
