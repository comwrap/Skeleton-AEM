const render = require('rosid-handler-sightly')

module.exports = [
	{
		name: 'JS',
		path: 'clientlibs/clientlib-site/components/*.js',
		handler: 'rosid-handler-js'
	},
	{
		name: 'LESS',
		path: 'clientlibs/**/*.{css,less}*',
		handler: 'rosid-handler-less',
		opts: {
			in: '.less'
		}
	},
	{
		name: 'HTL',
		path: 'components/**/*.{html, htl}*',
		handler: 'rosid-handler-sightly',
		opts: {
			prepend: render('src/components/_base_header.html', {data: require('./data')}),
			append: render('src/components/_base_header.html', { data: require('./data') }),
			in: '.html',
			data: 'data.js'
		}
	},
	{
		name: 'Malvid',
		path: 'index.{html,html.json}',
		handler: 'rosid-handler-malvid',
		opts: {
			src: 'src/',
			pattern: 'components/**/[^_]*.{ejs,njk,hbs,twig,html,htl}'
		}
	}
]