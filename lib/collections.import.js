//
// Meteor.startup(() => {
//   if (Meteor.isClient) {
//     /**
//     *  Set up the client side Mongo collections
//     */
//     let cf_entries = new Mongo.Collection('cf_entries');
//     let cf_assets = new Mongo.Collection('cf_assets');
//   }
//
//   if (Meteor.isServer) {
//     /**
//     *  When the app is booted, we need to process the images
//     *  from the Contentful source
//     */
//     ImageProcessor.init();
//     Contentful.fetchAndPopulate().then((result) => {
//       /**
//       *  Once content is fetched and stored in the
//       *  server side collections, we can publish it
//       *  in here. We loop through each configured
//       *  content type and publish a collection
//       *  using its name
//       */
//       _.each(CFConfig.contentTypes, (contentType) => {
//         /**
//         *  Give the name of the collection the same name as
//         *  the content type name and also use it as a filter
//         *  parameter.
//         */
//         Meteor.publish(contentType.name, () => {
//           console.log('Publishing:', contentType.name);
//           return Contentful.collections.entries.find({ 'contentTypeName': contentType.name });
//         });
//         /**
//         *  Publish the contentful assets collection, which we will need to
//         *  source the resized images later.
//         */
//         Meteor.publish('cf_assets', () => {
//           console.log('Publishing: assets');
//           return Contentful.collections.assets.find({});
//         });
//         /**
//         *  Publish the image collection
//         */
//         Meteor.publish(CFConfig.processedImageCollectionName, () => {
//           console.log('Publishing: images');
//           return ImageProcessor.imageCollection.find({});
//         });
//
//         /**
//         *  Then we listen for incoming changes from Contentful,
//         *  which will automatically update client side collections.
//         */
//         Contentful.listenForContentChanges();
//       }).fail(function(error) {
//         console.log(error.message);
//       });
//     });
//   }
// });
