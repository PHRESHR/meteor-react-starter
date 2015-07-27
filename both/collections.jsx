Posts = new Meteor.Collection('posts');
if (Meteor.isServer) {
  Posts.remove({});
  Posts.insert({
    title: 'New Meteor Rocks', content: 'Yeah! Check our Meteor Blog for more!'
  });
  Posts.insert({ title: 'MeteorHacks + Kadira => Kadira++', content: 'Something new soon.' });
  Posts.insert({ title: 'My Secret Post', category: 'private' });
}
