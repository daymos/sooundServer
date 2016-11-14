'use strict'

const Assert = require('assert'),
  Hapi = require('hapi'),
  Path = require('path');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3002, routes: { cors: true } });

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

server.route({
  method:'GET',
  path:'/',
  handler:function(request,reply){
    reply('im listening')
  }
})

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'sounds'
        }
    }
});

});
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
