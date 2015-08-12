/* global Meteor */
import _ from 'lodash';
const settings = _.clone(Meteor.settings);

// you **COULD** delete Meteor.setttings to make it not global but
// there will be issues with packages that assume it exists globally

// delete Meteor.settings;

export default settings;
