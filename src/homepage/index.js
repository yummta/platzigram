var page = require( 'page' );
var template = require( './template' );

page('/', function(ctx, next) {
	$('title').html('Platzigram');
	var main = document.getElementById('main-container');
	console.log(template);
	main.appendChild( template );
} )