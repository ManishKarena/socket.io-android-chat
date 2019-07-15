var express = require('express');
var socket = require('socket.io');

// App Setup
var app = express();
// Create server and listen to specific port number
var server = app.listen(4000, function(){
	console.log('Listening to requests on port 4000');
});

// Static files or middle-ware to serve public folder to client
app.use(express.static('public'));

// Socket setup; provide server reference to work with
var io = socket(server);

// Listening to an connection event; socket parameter refers to created/particular socket
io.on('connection', function(socket){
	// Print socket id on new connection
	console.log('made socket connection', socket.id);
	
	// Listen for chat message being sent from client
	socket.on('chat', function(data){
		// Send received chat message to all connected clients
		io.sockets.emit('chat',data);
	});
	
	// Listen for typing message being sent from client
	socket.on('typing', function(data){
		// Broadcast received typing message to all connected clients except current-socket(socket) client
		socket.broadcast.emit('typing', data);
	});
	
	// Listen for stop typing message being sent from client
	socket.on('stop typing', function(data){
		// Broadcast received stop typing message to all connected clients except current-socket(socket) client
		socket.broadcast.emit('stop typing',data);
	});
	
	// Listen for new message being sent from client
	socket.on('new message', function(data){
		// Broadcast received new message to all connected clients except current-socket(socket) client
		socket.broadcast.emit('new message', data);
	});
});