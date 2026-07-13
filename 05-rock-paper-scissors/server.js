const express = require('express');
const http = require('http');
const { connect } = require('http2');
const { type } = require('os');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let players = {};

wss.on('connection', (ws) => {
  console.log('New Player Connected');
  const playerId = Date.now();
  players[playerId] = { ws, choice: null };

  ws.send(
    JSON.stringify({ type: 'WAITING', message: 'Waiting for opponent...' }),
  );

  ws.on('message', (message) => {
    const data = JSON.parse(message);

    if (data.type == 'CHOICE') {
      players[playerId].choice = data.choice;
      checkGameResult();
    }
  });

  ws.on('close', () => {
    delete players[playerId];
    console.log('Player disconnected');
  });
});

function checkGameResult() {
  const playerId = Object.keys(players);

  if (playerId.length === 2) {
    const [p1, p2] = playerId;
    const choice1 = players[p1].choice;
    const choice2 = players[p2].choice;

    if (choice1 && choice2) {
      let result;
      if (choice1 === choice2) result = 'DRAW';
      else if (
        (choice1 === 'rock' && choice2 === 'scissor') ||
        (choice1 === 'paper' && choice2 === 'rock') ||
        (choice1 === 'scissor' && choice2 === 'paper')
      ) {
        result = 'PLAYER 1 WINS';
      } else {
        result = 'PLAYER 2 WINS';
      }

      players[p1].ws.send(JSON.stringify({ type: 'RESULT', result }));
      players[p2].ws.send(JSON.stringify({ type: 'RESULT', result }));

      players[p1].choice = null;
      players[p2].choice = null;
    }
  }
}

app.use(express.static('public'));
server.listen(3000, () =>
  console.log('Server running on http://localhost:3000'),
);
