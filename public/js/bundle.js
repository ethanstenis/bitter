(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var HomeView = require('./views/HomeView.js');

$(document).ready(function() {

  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });

  var homeView = new HomeView();
  $('#content').html(homeView.render().el);

});

},{"./views/HomeView.js":2}],2:[function(require,module,exports){
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
    var posts = new PostCollection();
    posts.fetch();
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvc3JjL2pzL2FwcC5qcyIsInB1YmxpYy9zcmMvanMvdmlld3MvSG9tZVZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIEhvbWVWaWV3ID0gcmVxdWlyZSgnLi92aWV3cy9Ib21lVmlldy5qcycpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAkLmFqYXhTZXR1cCh7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBob21lVmlldyA9IG5ldyBIb21lVmlldygpO1xuICAkKCcjY29udGVudCcpLmh0bWwoaG9tZVZpZXcucmVuZGVyKCkuZWwpO1xuXG59KTtcbiIsInZhciBIb21lVmlldyA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcbiAgZWw6ICdcXFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXFxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZSBjb2x1bW5zXCI+PC9kaXY+XFxcbiAgICAgICAgPGRpdiBjbGFzcyA9XCJzaXggY29sdW1uc1wiPjwvZGl2PlxcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj48L2Rpdj5cXFxuICAgICAgICAgICAgICA8ZGl2PlxcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXFxuICAgICAgICAgICAgICA8ZGl2IGNsc3M9XCJ0d2VsdmUgY29sdW1uc1wiPjwvZGl2PlxcXG4gICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIiBpZD1cImFsbC1wb3N0c1wiPjwvZGl2PlxcXG4gICAgICA8L2Rpdj5cXFxuICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAnLFxuXG4gIGluc2VydFBvc3RzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcG9zdHMgPSBuZXcgUG9zdENvbGxlY3Rpb24oKTtcbiAgICBwb3N0cy5mZXRjaCgpO1xuICAgIHZhciBwb3N0c0xpc3RWaWV3ID0gbmV3IFBvc3RzTGlzdFZpZXcoe1xuICAgICAgY29sbGVjdGlvbjogcG9zdHNcbiAgICB9KTtcbiAgICB0aGlzLiRlbC5maW5kKCdwb3N0cycpLmh0bWwocG9zdHNMaXN0Vmlldy5yZW5kZXIoKS5lbCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluc2VydFBvc3RzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVWaWV3O1xuIl19
