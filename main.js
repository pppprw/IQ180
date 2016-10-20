/**
 * Created by Donya on 10/20/2016 AD.
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = '3000';

//
app.use(express.static(__dirname + '/'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/test1.html');
});


server.listen(port,function(){
    console.log('server is listening on port : 3000 ');
});