# To-Do List App

A simple, yet functional to-do list application built with vanilla JavaScript, HTML, and CSS. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, and browser local storage.

## Features

- **Add Tasks**: Create new tasks with a clean input interface
- **Edit Tasks**: Modify existing tasks through a prompt dialog
- **Delete Tasks**: Remove tasks with a single click
- **Persistent Storage**: Tasks are saved to browser's localStorage for persistence across sessions
- **Responsive Design**: Clean, centered layout with intuitive user experience


### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/01-todo-list.git
cd 01-todo-list
```

2. Open `index.html` in your browser:

```bash
# Or simply double-click the file
```

## Usage

1. Type your task in the input field
2. Click "Add Task" or press Enter to add the task
3. Use "Edit" button to modify a task
4. Use "Delete" button to remove a task

Tasks are automatically saved to your browser's localStorage and will persist until you clear your browser data.

## Project Structure

```
01-todo-list/
├── index.html    # Main HTML structure and styling
├── script.js     # Core JavaScript functionality
└── README.md     # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Inline styling with flexbox layout
- **Vanilla JavaScript**: No frameworks, pure DOM manipulation
- **LocalStorage API**: Browser-based data persistence

### Key Functions

| Function | Description |
|----------|-------------|
| `addTask()` | Creates and saves a new task |
| `loadTasks()` | Loads and renders all saved tasks |
| `editTask(id)` | Updates an existing task's text |
| `deleteTask(id)` | Removes a task from storage |
| `renderTasks()` | Refreshes the task list display |
