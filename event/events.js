var EventEmitter=require('events').EventEmitter
var life=new EventEmitter()
//addEventListener
function water(who){
	console.log('给'+who+'xx')
}
life.on('xx',water)
life.removeListener('xx',water)
var hasConforListener=life.emit('xx','yk')
console.log(hasConforListener)
console.log(life.listeners('xx').length)
