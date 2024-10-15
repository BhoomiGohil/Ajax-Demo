# Ajax-Example

This project demonstrates how to use AJAX (Asynchronous JavaScript and XML) to fetch and display data from an API. In this example, we retrieve random dog images using the [Dog CEO API](https://dog.ceo/dog-api/).

## Features

- **AJAX Fetching**: Retrieves data asynchronously from an external API.
- **Dynamic Image Replacement**: Removes previous content and loads a new dog image each time.
- **Loading Indicator**: Displays a loading animation while the image is being fetched.

## How It Works

1. When the function `addNewDoggo()` is called:
   - A loading indicator is displayed.
   - Any existing dog image is removed from the container.
   - The app sends a request to the **Dog CEO API** to fetch a random dog image.
2. Once the image is successfully fetched:
   - The loading indicator is hidden.
   - A new `<img>` element is created, and the fetched image is displayed in the container.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/BhoomiGohil/Ajax-Demo.git
   ```
2. Open the project folder.
3. Launch the `index.html` file in a web browser.

## Visual Design

![Image](Image.png)

## Demo

The project showcases:

- AJAX requests to external APIs.
- DOM manipulation to dynamically update the web page content.
- Error-free and seamless asynchronous updates to the UI.

## API Reference

- **Dog CEO API**: `https://dog.ceo/api/breeds/image/random`
