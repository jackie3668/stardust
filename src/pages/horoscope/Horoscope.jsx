import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const HoroscopeScraper = () => {
  const [textContent, setTextContent] = useState('');

  useEffect(() => {
    // Define the URL of the web page you want to scrape
    const url = 'https://rapidapi.com/organization/tango-api';

    // Fetch the HTML content of the web page
    axios.get(url)
      .then((response) => {
        // Parse the HTML content with Cheerio
        const $ = cheerio.load(response.data);

        // Extract text content from specific HTML elements
        const title = $('h1').text();
        const paragraphs = $('p').map((index, element) => $(element).text()).get().join('\n');

        // Set the extracted text content in the state
        setTextContent(`Title: ${title}\n\nParagraphs:\n${paragraphs}`);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Web Scraping Example</h1>
      <pre>{textContent}</pre>
    </div>
  );
}

export default HoroscopeScraper;
