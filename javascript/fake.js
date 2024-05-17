// Replace '<word>' with the actual word you want to search for
const word = cow; 

// Make a GET request to the Dictionary API
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Extract meanings from the response data
    const meanings = data[0].meanings;
    
    // Display all meanings in the console
    meanings.forEach(meaning => {
      console.log(meaning.definition);
    });
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  });
