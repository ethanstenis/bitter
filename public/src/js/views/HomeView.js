var Backbone = require('backbone');
var _= require('underscore');

var HomeView = Backbone.View.extend({
  el: '\
    <div class="container">\
      <div class="row">\
        <div class="three columns"></div>\
        <div class ="six columns"></div>\
          <div class="row">\
            <div class="twelve columns"></div>\
              <div>\
              <div class="row">\
              <div clss="twelve columns"></div>\
          </div>\
          </div>\
        <div class="twelve columns" id="all-posts"></div>\
      </div>\
    </div>\
            ',

  insertPosts: function() {
    var PostCollection = require('../collections/PostCollection.js');
    var posts = new PostCollection();
    posts.fetch();
    var PostsListView = require('./views/PostsListView.js');
    var postsListView = new PostsListView({
      collection: posts
    });
    this.$el.find('posts').html(postsListView.render().el);
  },

  render: function() {
    this.insertPosts();
    return this;
  }
});

module.exports = HomeView;
