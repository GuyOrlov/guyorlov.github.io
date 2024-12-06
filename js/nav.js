fetch('/nav.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data); // Debugging line to verify nav.html content
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
