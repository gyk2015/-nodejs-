// var pet={
// 	words:"...",
// 	speak:function(say){
// 		console.log(say+" "+this.words)
// 	}
// }
// var dog={
// 	words:"wang"
// }
// pet.speak.call(dog,"speak")

function pet(words){
	this.words=words
	this.speak=function(){
		console.log(this.words)
	}
}
function Dog(words){
	pet.call(this,words)
}
var dog=new Dog("wang")
dog.speak()