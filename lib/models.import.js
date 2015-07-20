import { _ } from 'app-deps/main';

// This file contains definitions of models and collections. They will be
// placed into the `Collections` namespace so they can be accessed in code on
// either the client or the server.

// We use SimpleSchema and Collection2 from the `aldeed:collection2` package to
// define schemata and collection validation.

let Post = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  time: {
    type: Date,
    label: 'Time'
  }
});

export let Posts = new Mongo.Collection('Posts');
Posts.attachSchema(Post);

Posts.allow({
  insert: (userId, doc) => {
    return (userId && Roles.userIsInRole(userId, [ 'write', 'admin' ]));
  },
  update: (userId, doc, fields, modifier) => {
    return (userId && Roles.userIsInRole(userId, [ 'write', 'admin' ]));
  },
  remove: (userId, doc) => {
    return (userId && Roles.userIsInRole(userId, [ 'write', 'admin' ]));
  }
});

// This allows users to update their own preferences, but noone else's

Meteor.users.allow({
  update: (userId, user, fields, modifier) => {
    return userId && userId === user._id;
  }
});

// We publish two publications: `posts`, which we will subscribe to on a
// per-component basis, and `userData`, which we globally subscribe to on the
// client.

if (Meteor.isServer) {

  Meteor.publish('posts', function() {
    if (!this.userId) {
      return;
    }

    return Posts.find();
  });

  Meteor.publish('userData', function () {
    if (this.userId) {
      return Meteor.users.find({ _id: this.userId }, {
        fields: { 'profile': 1 }
      });
    } else {
      this.ready();
    }
  });

} else if (Meteor.isClient) {
  Meteor.subscribe('userData');
}
