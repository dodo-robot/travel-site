function Person(name, color) {
	this.name = name;
	this.favColor = color;
	this.greet = function() {
		console.log("Hello there my name is "+ this.name + " and my fav color is " + this.favColor + ".");
	}
}
