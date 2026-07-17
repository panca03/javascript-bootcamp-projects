# Text Resizer App

A simple text resizing application built with vanilla JavaScript, HTML, and CSS. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, and dynamic styling.

## Features

- **Increase/Decrease Text**: Adjust text size with button controls
- **Incremental Sizing**: Text grows/shrinks by 2px with each click
- **Minimum Size Limit**: Prevents text from becoming too small (min 10px)
- **Live Preview**: Text resizes instantly when buttons are clicked
- **Responsive Design**: Clean, centered layout with intuitive interface

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/13-text-resizer.git
cd 13-text-resizer
```

2. Open `index.html` in your browser:

```bash
# Or simply double-click the file
```

## Usage

1. Click "Increase" button to make the text larger (adds 2px each time)
2. Click "Decrease" button to make the text smaller (subtracts 2px each time)
3. Text will resize instantly as you click the buttons
4. Text size will not go below 10px for readability

## Project Structure

```
13-text-resizer/
├── index.html      # Main HTML structure
├── style.css       # Text resizer styling
├── script.js       # Core JavaScript functionality
└── README.md       # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with centered layout
- **Vanilla JavaScript**: Pure DOM manipulation
- **Event Listeners**: Click handlers for button interactions
- **Dynamic Styling**: Inline style modification via `style.fontSize`

### Key Functions

| Function | Description |
|----------|-------------|
| `increaseBtn.addEventListener('click')` | Increases font size by 2px |
| `decreaseBtn.addEventListener('click')` | Decreases font size by 2px (with minimum limit) |

### Font Size Configuration

- **Initial size**: 20px
- **Increment/Decrement**: 2px per button click
- **Minimum size**: 10px (enforced to maintain readability)