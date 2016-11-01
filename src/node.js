var Connection = require('./connection')

function Node(title, text){
	this.title = title;
	this.text = text;
	this.connections = [];
	this.conditions = {};
};

// console.log(Node("some title", "some text"))


Node.prototype.connect = function(node, text){
	if (!this.conditions[text]) {
		var newConnection = new Connection(node, text);

		this.conditions[text] = newConnection;

		this.connections.push(newConnection);
	} else {
		throw Error();
	}
}



module.exports = Node
