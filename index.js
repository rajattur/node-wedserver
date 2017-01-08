'use strict';
const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
	res.send('hello')
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		title: 'About Page',
	})
});

app.listen(3000, () => {
	console.log("Serving is running on Port 3000")
});


