var Backbone = require('backbone');

var PostCollection = Backbone.Collection.extend({
  url: '/api/posts/',
  model: PostModel
});

module.exports = PostCollection;
