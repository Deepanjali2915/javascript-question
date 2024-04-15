async function fetchData() {
  const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello');
  // if (!response.ok) {
  //   console.error('Network response was not ok');
  //   return;
  // }
  const data = await response.json();
  console.log(data[0]);
}

// Call the fetchData function
 fetchData();
