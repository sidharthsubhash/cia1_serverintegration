fetch("https://jsonplaceholder.typicode.com/users/3")
  .then(response => response.json())
  .then(data => {
    console.log("Phone Number:", data.phone);
  })
  .catch(error => {
    console.log("Error:", error);
  });
