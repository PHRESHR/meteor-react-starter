Posts = new Meteor.Collection('posts');
if (Meteor.isServer) {
  Posts.remove({});
  Posts.insert({
    title: 'Meteor React Rocks',
    slug: 'meteor-react-rocks',
    content: 'Yeah! Meteor + React is awesome!'
  });
  Posts.insert({
    title: 'Using Flow Router SSR and React Layouts',
    slug: 'using-flow-router-ssr-and-react-layouts',
    content: 'Something new soon.'
  });
  Posts.insert({
    title: 'Maybe I can add Flux next',
    slug: 'maybe-i-can-add-flux-next',
    content: 'Flux Example with React & Meteor soon.'
  });
  Posts.insert({
    title: 'My Secret Post',
    category: 'private'
  });
}
