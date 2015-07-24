Posts = new Meteor.Collection('posts');

if (Meteor.isServer) {
  Posts.remove({});
  Posts.insert({
    title: 'Meteor, React and Flow Router Rocks',
    content: 'Yeah! Check our Meteor Blog for more!'
  });
  Posts.insert({
    title: 'MeteorHacks and Kadira',
    content: 'Something new soon.'
  });
  Posts.insert({
    title: 'My Secret Post',
    content: 'Some secret content',
    category: 'private'
  });
}
