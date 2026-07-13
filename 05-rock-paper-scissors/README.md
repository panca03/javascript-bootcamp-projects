# Rock Paper Scissors App

A multiplayer Rock Paper Scissors game built with vanilla JavaScript, HTML, CSS, Express.js, and WebSocket. This project demonstrates fundamental web development concepts including real-time communication, DOM manipulation, and event handling.

## Features

- **Multiplayer Gameplay**: Real-time two-player game using WebSocket
- **Interactive Choices**: Rock, Paper, and Scissors buttons with emoji icons
- **Real-time Status**: Shows waiting status and game results instantly
- **Visual Feedback**: Button click animation with scale effect
- **Responsive Design**: Clean, centered layout with intuitive user experience

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/05-rock-paper-scissors.git
cd 05-rock-paper-scissors
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node server.js
```

4. Open `http://localhost:3000` in your browser (open two tabs for two players)

## Usage

1. Open the game in two different browser tabs or windows
2. Each player clicks one of the three choices (✊ Rock, 🖐️ Paper, ✌️ Scissors)
3. Wait for your opponent to make a choice
4. The game result (Player 1 Wins, Player 2 Wins, or Draw) will be displayed
5. You can play again by making a new choice

## Project Structure

```
05-rock-paper-scissors/
├── server.js           # Express server with WebSocket logic
├── package.json        # Project dependencies (express, ws)
├── public/
│   ├── index.html      # Main HTML structure
│   ├── style.css       # Game styling
│   └── client.js       # Client-side WebSocket handling
└── README.md           # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Flexbox layout with modern styling
- **Vanilla JavaScript**: Client-side DOM manipulation
- **Node.js**: Server runtime environment
- **Express.js**: Web server framework
- **WebSocket (ws)**: Real-time bidirectional communication

### Key Functions

| Function (server.js) | Description |
|----------------------|-------------|
| `checkGameResult()` | Determines winner based on both players' choices |
| `wss.on('connection')` | Handles new player WebSocket connections |

| Function (client.js) | Description |
|----------------------|-------------|
| `socket.onmessage` | Handles incoming messages (status/result) |
| `.choices click handler` | Sends player choice and triggers animation |