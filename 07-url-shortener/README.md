# URL Shortener App

A URL shortening application built with vanilla JavaScript, HTML, and CSS that integrates with the Bit.ly API. This project demonstrates fundamental web development concepts including API integration, DOM manipulation, and asynchronous JavaScript.

## Features

- **URL Shortening**: Convert long URLs to short, shareable links using Bit.ly API
- **Copy to Clipboard**: Easily copy the shortened URL with one click
- **Error Handling**: Graceful error handling for invalid URLs and API failures
- **Responsive Design**: Clean, centered layout with intuitive user experience
- **Real API Integration**: Uses Bit.ly API for reliable URL shortening service

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/07-url-shortener.git
cd 07-url-shortener
```

2. Get a Bit.ly API Access Token:
   - Sign up at [Bit.ly](https://bitly.com)
   - Generate an access token from your account settings
   - Replace the `ACCESS_TOKEN` value in `script.js` with your token

3. Open `index.html` in your browser:

```bash
# Or simply double-click the file
```

## Usage

1. Enter a long URL in the input field (e.g., `https://example.com/very-long-url-path`)
2. Click "Shorten" to generate a shortened URL
3. The shortened URL will appear in the result field
4. Click "Copy" to copy the shortened URL to your clipboard

## Project Structure

```
07-url-shortener/
├── index.html      # Main HTML structure
├── styles.css      # URL shortener styling
├── script.js       # Core JavaScript functionality with Bit.ly API integration
└── README.md       # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with responsive design
- **Vanilla JavaScript**: Pure DOM manipulation with async/await
- **Bit.ly API**: External URL shortening service integration
- **Fetch API**: Modern HTTP requests for API calls
- **Clipboard API**: Native browser clipboard integration

### Key Functions

| Function | Description |
|----------|-------------|
| `shortenUrl()` | Sends request to Bit.ly API and displays the shortened URL |
| `copyToClipboard()` | Copies the shortened URL to clipboard using Clipboard API |

### API Integration

The application uses the Bit.ly v4 API endpoint:
- **Endpoint**: `https://api-ssl.bitly.com/v4/shorten`
- **Method**: POST with Bearer token authentication
- **Body**: `{ long_url: "your-long-url" }`
- **Response**: Returns the shortened URL in `result.link`