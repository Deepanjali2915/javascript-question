const readline = require('readline');
// const fetch = require('node-fetch');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a word to look up in the dictionary: ', (word) => {
  // Construct the API URL with user input
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  // Make a GET request to the API using fetch()
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Response data:', data);
      // You can handle and display the response data here
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

  rl.close();
});
