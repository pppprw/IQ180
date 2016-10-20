/**
 * Created by Donya on 10/20/2016 AD.
 */
var socket = io();

$('form').submit(function(){
    socket.emit('player name', $('#name').val());
    $('#name').val('');
    return false;
});