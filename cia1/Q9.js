fetch("https://jsonplaceholder.typicode.com/users/4")
  .then(response => response.json())
  .then(data => {
    console.log("Company Name:", data.company.name);
    console.log("Website:", data.website);
  })
  .catch(error => {
    console.log("Error:", error);
  });
