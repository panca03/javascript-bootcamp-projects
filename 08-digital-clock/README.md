# Digital Clock App

A simple digital clock application built with vanilla JavaScript, HTML, and CSS. This project demonstrates fundamental web development concepts including DOM manipulation, JavaScript Date object, and CSS animations.

## Features

- **Real-time Clock**: Displays current time in hours, minutes, and seconds
- **12-hour Format**: Shows AM/PM indicator for easy time reading
- **Auto-updating**: Updates every second automatically
- **Animation Effect**: Smooth scale animation with color change when time changes
- **Responsive Design**: Clean, centered layout with dark theme

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/08-digital-clock.git
cd 08-digital-clock
```

2. Open `index.html` in your browser:

```bash
# Or simply double-click the file
```

## Usage

- The clock starts automatically when the page loads
- Time is displayed in 12-hour format (e.g., 01:30:45 PM)
- Numbers animate (scale and change color) when seconds/minutes/hours change
- No user interaction required - just open and watch the time!

## Project Structure

```
08-digital-clock/
├── index.html      # Main HTML structure
├── styles.css      # Clock styling and animations
├── script.js       # Core JavaScript functionality
└── README.md       # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with flexbox and CSS transitions
- **Vanilla JavaScript**: Pure DOM manipulation
- **Date Object**: Built-in JavaScript Date API for time handling
- **setInterval()**: Automatic time updates every 1000ms (1 second)

### Key Functions

| Function | Description |
|----------|-------------|
| `updateClock()` | Updates the clock display with current time |
| `animateChange(id)` | Adds animation effect to the changed time element |

### Time Format

- **Hours**: 12-hour format (1-12) with leading zero
- **Minutes**: Two digits with leading zero
- **Seconds**: Two digits with leading zero
- **AM/PM**: Indicates morning or afternoon/evening