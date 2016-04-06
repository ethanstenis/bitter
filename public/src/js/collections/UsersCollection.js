var Backbone = require('backbone');

var UsersCollection = Backbone.Collection.extend({
  url: '/api/users/',
  model: UserModel
});

module.exports = UsersCollection;
