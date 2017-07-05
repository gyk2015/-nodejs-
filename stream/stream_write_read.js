var Readable = require('stream').Readable
var Writable = require('stream').Writable

var readStream = new Readable()
var writStream = new Writable()

readStream.push('i')
readStream.push('love')
readStream.push('you')
readStream.push(null)//必加
writStream._write = function(chunk,encode,cb) {
	console.log(chunk.toString())
	cb()
}
readStream.pipe(writStream)