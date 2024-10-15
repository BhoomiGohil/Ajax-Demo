// API endpoint to fetch a random dog image
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// Select the container where dog images will be displayed
const doggos = document.querySelector(".doggos");

// Function to add a new dog image to the container
function addNewDoggo() {
  // Show loading indicator while the image is being fetched
  document.querySelector(".loadimg").style.display = "block";

  // Remove any existing image from the container
  if (doggos.children.length > 0) {
    doggos.removeChild(doggos.firstChild);
  }

  // Fetch a new dog image from the API
  const promise = fetch(DOG_URL);

  // Handle the promise returned by the fetch operation
  promise
    .then(function (response) {
      // Parse the response as JSON
      return response.json();
    })
    .then(function (processedResponse) {
      // Hide the loading indicator once the image is ready
      document.querySelector(".loadimg").style.display = "none";

      // Create a new <img> element to display the dog image
      var img = document.createElement("img");
      img.src = processedResponse.message; // Set the image source

      // Add the new image to the container
      doggos.appendChild(img);
    });
}
