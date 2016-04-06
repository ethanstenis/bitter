var UserModel = Backbone.Model.extend({
  urlRoot: '/api/users/',
  idAttribute: 'id'
});

module.exports = UserModel;
