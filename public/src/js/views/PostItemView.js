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
    this.$el.html(this.template({
      post: this.model
    }));
  }
});

module.exports = PostItemView;
