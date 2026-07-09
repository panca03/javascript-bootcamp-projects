# Calculator App

A simple, functional calculator application built with vanilla JavaScript, HTML, and CSS. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, and basic mathematical operations.

## Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Interactive Display**: Real-time input display with clean interface
- **Clear Function**: Reset the display with a single button click
- **Error Handling**: Invalid expressions are caught and handled gracefully
- **Responsive Design**: Centered layout with intuitive button grid

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/02-calculator.git
cd 02-calculator
```

2. Open `index.html` in your browser:

```bash
# Or simply double-click the file
```

## Usage

1. Click number buttons (0-9) to input values
2. Click operator buttons (+, -, *, /) to perform calculations
3. Click "." for decimal numbers
4. Click "=" to calculate and display the result
5. Click "C" to clear the display and start over

## Project Structure

```
02-calculator/
├── index.html    # Main HTML structure
├── style.css     # Calculator styling and layout
├── script.js     # Core JavaScript functionality
└── README.md     # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Flexbox and Grid layout with modern styling
- **Vanilla JavaScript**: No frameworks, pure DOM manipulation
- **eval()**: Safe evaluation of mathematical expressions (limited scope)

### Key Functions

| Function | Description |
|----------|-------------|
| `appendToDisplay(value)` | Appends a value to the display input |
| `clearDisplay()` | Clears the display input |
| `calculateResult()` | Evaluates and displays the result of the expression |