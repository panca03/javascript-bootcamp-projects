# Notes App

A simple yet functional notes application built with vanilla JavaScript, HTML, and CSS. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, and browser local storage.

## Features

- **Create Notes**: Write and save notes with a clean textarea interface
- **Delete Notes**: Remove notes with a dedicated delete button
- **Persistent Storage**: Notes are saved to browser's localStorage for persistence across sessions
- **Responsive Design**: Clean, centered layout with intuitive user experience
- **Auto-loading**: Notes are automatically loaded and displayed on page load

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/03-notes-app.git
cd 03-notes-app
```

2. Open `index.html` in your browser:

```bash
# Or simply double-click the file
```

## Usage

1. Type your note in the textarea input field
2. Click "Save Note" to add the note
3. Use "Delete" button on each note to remove it
4. Notes are automatically saved to your browser's localStorage and will persist until you clear your browser data

## Project Structure

```
03-notes-app/
├── index.html         # Main HTML structure and styling
├── style.css          # Core CSS styling
├── script.js          # Core JavaScript functionality
└── README.md          # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Flexbox layout with modern styling
- **Vanilla JavaScript**: No frameworks, pure DOM manipulation
- **LocalStorage API**: Browser-based data persistence

### Key Functions

| Function | Description |
|----------|-------------|
| `saveNoteButton` event | Creates and saves a new note from textarea |
| `displayNotes()` | Loads and renders all saved notes on page load |
| `deleteNote(index)` | Removes a note from storage by index |