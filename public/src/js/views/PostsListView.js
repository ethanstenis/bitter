var Backbone = require('backbone');
var _= require('underscore');

var PostsListView = Backbone.View.extend({
  el: '<ul></ul>',

  template: _.template('\
    <% posts.each(function(post)) { %>\
      <li><a href="#"><% post.get("title") %></a></li>\
      <% }) %>\
  '),

  initialize: function() {
    this.listenTo(this.collection, 'all', function() {
      console.log(event);
    });
    this.listenTo(this.collection, 'sync update', this.render);
  },

  render: function() {
    var that = this;
    this.$el.html('');
    this.collection.each(function(postModel) {
      var PostItemView = require('./views/PostItemView.js');
      var postItemView = new PostItemView({
        model: postModel
      });
      postItemView.render();
      that.$el.append(postItemView.el);
    });
    return this;
  }
});

module.exports = PostsListView;
