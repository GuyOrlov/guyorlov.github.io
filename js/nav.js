fetch('/nav.html')
    .then(response => response.text())
    .then(data => {
        console.log(data); // Debugging line
        document.getElementById('navbar-placeholder').innerHTML = data;
    });
