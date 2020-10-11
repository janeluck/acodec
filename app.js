const WebSocket = require('ws');
const wss = require('./wss').wsserver;
module.exports = app => {
  app.once('server', server => {
    // websocket
    wss(app, server);
  });
  app.on('error', (err, ctx) => {
    // report error
  });
  app.on('request', ctx => {
    // log receive request
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
  });
};


