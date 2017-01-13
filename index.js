var express = require( 'express' ),
	exphbs = require( 'express3-handlebars' ),
	//logfmt = require( 'logfmt' ),

	app = express();

app.use( express.static('public') );

app.engine( 'handlebars', exphbs({
	defaultLayout: 'main',
	helpers: {
		json: function( context ){
			return JSON.stringify( context );
		}
	}
}) );
app.set( 'view engine', 'handlebars' );

// fun
app.get( '/hires', function(req, res){
	res.render('hires');
} );

// all
app.get( '*', function(req, res){
	res.render('index');
} );

var port = Number( process.env.PORT || 5000 );

app.listen( port, function(){
	console.log( "Listening on port " + port );
} );