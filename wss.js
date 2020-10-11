const WebSocket = require('ws');

function wss(application, server) {
  const wss = new WebSocket.Server({
    server,
    path: '/ws',
  });
  application.wss = wss;
  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

    ws.send('something');
  });
}

module.exports = {
  wss,
}
