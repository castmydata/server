var server = require('./lib/server');

// The express server is exposed 
server.api.use(function(req, res, next){
    // console.log('express middleware');
    next();
});

// And so is the socket.io server
server.io.use(function(socket, next){
    // console.log('socket.io middlware');
    next();
});

// And so is the http server
server.http.on('connect', function(){
  // do something
});

// OK LETS GO!
server.start();