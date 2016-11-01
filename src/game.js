var Node = require('./node')

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
}
Game.prototype.addNode = function(title,text){
	if (this.nodes[title]) { throw Error(); }

	var newNode = new Node(title,text);
	this.nodes[title] = newNode;

	if(this.startingPoint === null){ this.startingPoint = newNode; }

	return newNode;
}

Game.prototype.getNode = function(title){
	return this.nodes[title];
};

Game.prototype.connect = function(node1Name, node2Name, cond){
	this.nodes[node1Name].connect(this.nodes[node2Name], cond);
}

module.exports = Game
