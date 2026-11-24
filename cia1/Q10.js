fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("User retrieved successfully:", data.name);
  })
  .catch(error => {
    console.log("Error:", error.message);
  });
