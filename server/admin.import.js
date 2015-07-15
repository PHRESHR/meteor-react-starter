Meteor.methods({
  // Create a new user with the given email address and send an enrolment email.

  createNewUser: (email, role) => {
    check(email, String);
    check(role, String);
    check(role, Match.OneOf('admin', 'read', 'write'));

    if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
      throw new Meteor.Error(403, 'Permission denied');
    }

    let userId = Accounts.createUser({
      username: email,
      email: email
    });

    Roles.addUsersToRoles(userId, [role]);

    // Sends an email asking user to pick a password
    Accounts.sendEnrollmentEmail(userId);
  }

});
