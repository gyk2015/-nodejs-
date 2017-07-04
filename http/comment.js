var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content':'lajio',
	'cid':348
})

var option = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docoment '
}