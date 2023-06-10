// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the URL of the website you want to retrieve
var url = 'https://example.com';

// Make a GET request to the website
xhr.open('GET', url, true);

// Set the response type to 'text' to retrieve the content as plain text
xhr.responseType = 'text';

// Define a callback function to handle the response
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Request successful, update the content of a specific element on your website
      var element = document.getElementById('targetElement');
      element.innerHTML = xhr.responseText;
    } else {
      // Request failed, handle the error
      console.error('Request failed. Status:', xhr.status);
    }
  }
};

// Send the request
xhr.send();
