// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   // if (!response.ok) {
//   //   console.error('Network response was no
//   const data = await response.json();
//   console.log(data);
// }

//  fetchData();



// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
  
//     const titles = data.map(post => post.title);
//     console.log(titles);
//   })
//   .catch(error => {
  
//     console.error('There was a problem with the fetch operation:', error);
//   });




