# Real-Time Chat App

A real-time chat application built with vanilla JavaScript, HTML, CSS, Express.js, and Socket.IO. This project demonstrates fundamental web development concepts including real-time bidirectional communication, DOM manipulation, and event handling.

## Features

- **Real-time Messaging**: Instant message delivery using Socket.IO
- **Multi-user Support**: Multiple users can chat simultaneously
- **Auto-scroll Messages**: Messages appear instantly in the chat window
- **Clean Interface**: Simple and intuitive chat UI
- **Responsive Design**: Centered layout optimized for chat experience

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/06-real-time-chat.git
cd 06-real-time-chat
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
# or
node server.js
```

4. Open `http://localhost:3000` in your browser (open multiple tabs to simulate multiple users)

## Usage

1. Type your message in the input field
2. Click "Send" or press Enter to send the message
3. Messages are instantly displayed to all connected users
4. Open multiple tabs/windows to test multi-user chat functionality

## Project Structure

```
06-real-time-chat/
├── server.js              # Express server with Socket.IO
├── package.json           # Project dependencies (express, socket.io)
├── public/
│   ├── index.html         # Main HTML structure
│   └── style.css          # Chat styling
└── README.md              # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with responsive design
- **Vanilla JavaScript**: Client-side DOM manipulation
- **Node.js**: Server runtime environment
- **Express.js**: Web server framework
- **Socket.IO**: Real-time bidirectional event-based communication

### Key Functions

| Function (server.js) | Description |
|----------------------|-------------|
| `io.on('connection')` | Handles new user connections |
| `socket.on('Chat Message')` | Receives and broadcasts messages to all users |
| `socket.on('disconnect')` | Logs when a user disconnects |

| Function (client.js inline) | Description |
|---------------------------|-------------|
| `sendMessage()` | Sends message to server via Socket.IO |
| `socket.on('Chat Message')` | Receives and displays messages in the UI |