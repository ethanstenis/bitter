'use strict';

$.ajax('/posts', {
	type: 'GET',
	success: function(posts {
		var string = "";
		_.each(posts, function(post) {
			console.log(post);
			string += post.name;
			string += ' ';
		});
		$('#content').text(string);
	}
});
