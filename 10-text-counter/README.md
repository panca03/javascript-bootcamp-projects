# Word & Character Counter App

A simple word and character counting application built with vanilla JavaScript, HTML, and CSS. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, and string processing.

## Features

- **Real-time Counting**: Instant word and character count as you type
- **Word Count**: Counts words by splitting on whitespace
- **Character Count**: Counts all characters including spaces
- **Live Updates**: Counts update on every keystroke
- **Responsive Design**: Clean, centered layout with intuitive user experience

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/10-text-counter.git
cd 10-text-counter
```

2. Open `index.html` in your browser:

```bash
# Or simply double-click the file
```

## Usage

1. Type or paste text in the textarea
2. Watch the word count update in real-time
3. Watch the character count update in real-time
4. Both counts display automatically below the textarea

## Project Structure

```
10-text-counter/
├── index.html      # Main HTML structure
├── styles.css      # Counter styling and layout
├── scripts.js      # Core JavaScript functionality
└── README.md       # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with flexbox layout
- **Vanilla JavaScript**: Pure DOM manipulation
- **Input Event**: Real-time updates on every keystroke
- **String Methods**: `trim()`, `split()`, and `length` for counting

### Key Functions

| Function | Description |
|----------|-------------|
| `updateCount()` | Calculates and displays word and character counts |

### Counting Logic

- **Character Count**: Uses `text.length` to count all characters
- **Word Count**: Uses `text.trim().split(/\s+/).length` to split on whitespace
- **Edge Case**: Returns 0 words when text is empty or only whitespace