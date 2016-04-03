'use strict';

// Also can write: $(document).on('ready', function) {

// $(document).ready(function) {

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

// MODELS

// This creates the Frontend Post Model
var PostModel = Backbone.Model.extend({
	urlRoot: '/api/posts/',
	idAttribute: 'id'
});

// This creates the Frontend User Model
var UserModel = Backbone.Model.extend({
	urlRoot: '/api/users/',
	idAttribute: 'id'
});

// COLLECTIONS

// This creates the Frontend Posts Collection
var PostCollection = Backbone.Collection.extend({
	url: '/api/posts/',
	model: PostModel
});

// This creates the Frontend User Collection
var UsersCollection = Backbone.Collection.extend({
	url: '/api/users/',
	model: UserModel
});

// VIEWS


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
            <div class="twelve columns" id="all-posts"></div>\
            </div>\
            </div>\
            ',

  render: function(){
    var that = this;
    var posts = new PostsCollection();
    posts.fetch();
    var postsListView = new PostsListView({
        collection: posts
    });
    this.$el.find('#all-posts').html(postsListView.render().el);
    return this;
  }
});



// This creates the Frontend Post Item View
var PostItemView = Backbone.View.extend({
	el: '<li class="hello"></li>',

	template: _.template('<h2><%= post.get("title") %></h2>'),

  events: {
    'click h2': function(e) {
        this.model.destroy({
          wait: true
        });
    }
  },

  initialize: function() {
    this.listenTo(this.model, 'all', function() {
      console.log(arguments);
    });
    this.listenTo(this.model, 'sync', this.render);
  },

	render: function() {
		this.$el.html(this.template({post: this.model}));
	}
});

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
			var postItemView = new PostItemView({ model: postModel });
			postItemView.render();
			that.$el.append(postItemView.el);
		});
    return this;
	}
});

var homeView = new HomeView();
$#('#content').html(homeView.render().el);

// New iteration of a Posts Collection
var posts = new PostsCollection();
// fetch data for posts
posts.fetch();

var postsListView = new PostsListView({collection: posts});
postsListView.render();

$('#content').html(postsListView.el);
  console.log('view inserted!');
