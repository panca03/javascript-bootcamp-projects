# Password Generator App

A simple random password generator built with vanilla JavaScript, HTML, and CSS. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, and random string generation.

## Features

- **Random Password Generation**: Creates secure random passwords
- **Mixed Characters**: Includes uppercase, lowercase, numbers, and symbols
- **Fixed Length**: Generates 10-character passwords
- **One-click Copy**: Copy generated password to clipboard instantly
- **Responsive Design**: Clean, centered layout with intuitive interface

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/11-password-generator.git
cd 11-password-generator
```

2. Open `index.html` in your browser:

```bash
# Or simply double-click the file
```

## Usage

1. Click "Generate Password" button to create a random password
2. The generated password will appear in the input field
3. Click "Copy to Clipboard" to copy the password for use
4. An alert will confirm when the password is successfully copied

## Project Structure

```
11-password-generator/
├── index.html      # Main HTML structure
├── style.css       # Password generator styling
├── script.js       # Core JavaScript functionality
└── README.md       # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with centered layout
- **Vanilla JavaScript**: Pure DOM manipulation
- **Math.random()**: JavaScript's built-in random number generator
- **Clipboard API**: Native browser API for copying text

### Key Functions

| Function | Description |
|----------|-------------|
| `generatePassword()` | Creates a random 10-character password with mixed characters |
| `copyPassword()` | Copies the generated password to clipboard |

### Password Character Set

The generated passwords include:
- **Uppercase letters** (A-Z)
- **Lowercase letters** (a-z)
- **Numbers** (0-9)
- **Symbols** (!@#$%^&*())