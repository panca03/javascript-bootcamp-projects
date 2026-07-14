const ACCESS_TOKEN = 'Your_Token_Acces_From_BitLy';

async function shortenUrl() {
  const longUrl = document.getElementById('longUrl').value;
  const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

  if (!longUrl) {
    alert('Please enter a URL.');
    return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        long_url: longUrl,
      }),
    });

    const result = await response.json();

    console.log(result);

    if (!response.ok) {
      throw new Error(result.message || 'Failed to shorten URL');
    }

    document.getElementById('shortUrl').value = result.link;
  } catch (error) {
    alert('Error: ' + error.message);
  }
}

async function copyToClipboard() {
  const shortenUrlInput = document.getElementById('shortUrl');

  if (!shortenUrlInput.value) {
    alert('No shortened URL to copy.');
    return;
  }

  await navigator.clipboard.writeText(shortenUrlInput.value);
  alert('Shortened URL copied to clipboard!');
}
