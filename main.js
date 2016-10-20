/**
 * Created by Donya on 10/20/2016 AD.
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = '3000';
var io = require('socket.io')(server);

//
app.use(express.static(__dirname + '/'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/test1.html');
});

io.on('connection',function(socket){
    console.log('a user connected');
    socket.on('player name',function(n){
        console.log(n);
    });
});

server.listen(port,function(){
    console.log('server is listening on port : 3000 ');
});

