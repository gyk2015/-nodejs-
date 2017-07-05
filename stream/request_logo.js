var http = require('http')
var fs = require('fs')
var request = require('request')
http
	.createServer(function(req,res) {
		// fs.readFile('./buffer/logo.gif',fucntion(err,data) {
		// 	if(err) {
		// 		res.end('file not exit')
		// 	}else {
		// 		res.writeHeader(200,{'Context-Type': 'text/html'})
		// 		res.end(data)
		// 	}
		// })
		fs.createReadStream('../buffer/logo.gif').pipe(res);
		// request('url').pipe(res)
	})
	.listen(8090)