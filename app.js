const WebSocket = require('ws');

module.exports = app => {
  app.once('server', server => {
    // websocket
    const wss = new WebSocket.Server({ server });
    wss.on('connection', function connection(ws) {
      ws.on('message', function incoming(message) {
        console.log('received: %s', message);
      });

      ws.send('something');
    });
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
