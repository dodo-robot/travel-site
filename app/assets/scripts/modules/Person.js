/*
this is es5 js code to create a "class" 

function Person(name, color) {
	this.name = name;
	this.favColor = color;
	this.greet = function() {
		console.log("Hello there my name is "+ this.name + " and my fav color is " + this.favColor + ".");
	}
}
*/

// with es6 we can use a new syntax to create classes
class Person {
	constructor(name, favColor) {
		this.name = name;
		this.favColor = favColor;
	}

	greet() {
		console.log("Yo Mate there my name is "+ this.name + " and my fav color is " + this.favColor + ".");
	}

}
// module.exports = Person; --> this is node.js way to import code

export default Person; // this is the es6 way of exporting classes
