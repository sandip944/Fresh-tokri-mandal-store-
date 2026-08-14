const express = require('http');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Ek user jud gaya hai');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User alag ho gaya hai');
  });
});

server.listen(3000, () => {
  console.log('Server http://localhost:3000 par chal raha hai');
});
Use code with caution.
