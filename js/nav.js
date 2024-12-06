async function loadNavbar() {
    try {
        const response = await fetch('/nav.html');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        document.getElementById('navbar-placeholder').innerHTML = data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

loadNavbar();
