/**
 * Created by Donya on 10/20/2016 AD.
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);

//
app.use(express.static(__dirname + '/'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/test1.html');
});


server.listen(3000,function(){
    console.log('listening on * : 3000 ');
});