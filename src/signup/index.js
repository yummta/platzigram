var page = require( 'page' );
var template = require( './template' );

page('/signup', function(ctx, next) {
	$('title').html('Platzigram - Signup');
	var main = document.getElementById('main-container');
	main.innerHTML = "";
	main.appendChild( template );
} )