# Color Picker App

A simple color picker application built with vanilla JavaScript, HTML, and CSS. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, and dynamic styling.

## Features

- **Native Color Picker**: Built-in HTML5 color input for easy color selection
- **Text Input Support**: Enter colors by name or hex code
- **Live Preview**: Background color changes instantly as you select or type
- **Smooth Transitions**: Animated background color transitions
- **Responsive Design**: Clean, centered layout with intuitive interface

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/12-color-picker-app.git
cd 12-color-picker-app
```

2. Open `index.html` in your browser:

```bash
# Or simply double-click the file
```

## Usage

1. Use the color picker to select any color visually
2. Or enter a color name (e.g., "red", "blue") in the text input
3. Or enter a hex code (e.g., "#ff5733") in the text input
4. The background color changes instantly with smooth transition

## Project Structure

```
12-color-picker-app/
├── index.html      # Main HTML structure
├── style.css       # Color picker styling and transitions
├── script.js       # Core JavaScript functionality
└── README.md       # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup with native color input type
- **CSS3**: Modern styling with smooth background transitions
- **Vanilla JavaScript**: Pure DOM manipulation
- **Input Events**: Real-time updates on color/input changes
- **CSS Custom Properties**: Dynamic background color application

### Key Functions

| Function | Description |
|----------|-------------|
| `changeBackgroundColor(color)` | Updates the body background color |
| `colorPicker.addEventListener('input')` | Handles color picker changes and syncs text input |
| `colorInput.addEventListener('input')` | Handles text input color changes |

### Supported Color Formats

- **Color Names**: "red", "blue", "green", etc.
- **Hex Codes**: "#ff5733", "#1a2b3c", etc.
- **Color Picker**: Native HTML5 color selector (outputs hex values)