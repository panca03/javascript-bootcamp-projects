# Expense Tracker App

A simple yet functional expense tracker application built with vanilla JavaScript, HTML, CSS, and Chart.js. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, data visualization, and financial calculations.

## Features

- **Track Transactions**: Add income and expense transactions with description and amount
- **Visual Analytics**: Doughnut chart visualization showing income vs expense breakdown
- **Balance Calculation**: Real-time balance updates based on income and expenses
- **Transaction Management**: View all transactions with color-coded income (green) and expense (red) indicators
- **Remove Transactions**: Delete individual transactions with a single click
- **Responsive Design**: Clean, centered layout with intuitive user experience

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/04-expense-tracker.git
cd 04-expense-tracker
```

2. Open `index.html` in your browser:

```bash
# Or simply double-click the file
```

## Usage

1. Enter a description for your transaction
2. Enter the amount (use positive numbers)
3. Select "income" or "expense" type
4. Click "Add" to save the transaction
5. View your transactions in the list below
6. Watch the balance update in real-time
7. See the visual breakdown in the doughnut chart
8. Click "X" on any transaction to remove it

## Project Structure

```
04-expense-tracker/
├── index.html      # Main HTML structure
├── style.css       # Core CSS styling
├── script.js       # Core JavaScript functionality
└── README.md       # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Flexbox layout with modern styling
- **Vanilla JavaScript**: No frameworks, pure DOM manipulation
- **Chart.js**: Data visualization library for doughnut chart

### Key Functions

| Function | Description |
|----------|-------------|
| `addTransaction()` | Creates and saves a new income/expense transaction |
| `updateUi()` | Renders all transactions and updates the balance display |
| `removeTransaction(index)` | Removes a transaction by index from the list |
| `updateCharts()` | Updates the doughnut chart with income/expense totals |