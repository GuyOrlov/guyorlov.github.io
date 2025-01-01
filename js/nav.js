fetch('/nav.html')
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); // Parse the response text
    })
    .then(data => {
        // Insert the loaded HTML into the placeholder
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Failed to load navigation:', error);
    });
