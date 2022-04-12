const express = require('express'),
	express_hb = require('express-handlebars'),
	app = express();

app.engine('hbs', express_hb.engine({
	extname: ".hbs",
	helpers: {
		// 	json: function (context) {
		// 		return JSON.stringify(context);
		// 	}
		section(name, options) {
			if (!this._sections)
				this._sections = {};
			this._sections[name] = options.fn(this);
			return null;
		},
	},
	layoutsDir: __dirname + '/views/layouts',
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

// 
app.get('/projects', function (req, res) {
	res.render('projects');
});

// hi dpi screens
app.get('/hires', function (req, res) {
	res.render('hires');
});

// index
app.get('/', function (req, res) {
	res.render('index');
});

app.get('*', function (req, res) {
	res.status(404).render('notfound');
});

const port = Number(process.env.PORT || 5000);

app.listen(port, function () {
	console.log("Listening on port " + port);
});