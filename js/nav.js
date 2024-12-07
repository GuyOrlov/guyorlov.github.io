fetch('/nav.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;

        // Reinitialize Bootstrap after dynamic load
        var navbarTogglers = document.querySelectorAll('.navbar-toggler');
        navbarTogglers.forEach(toggler => {
            toggler.addEventListener('click', function () {
                // Toggle the collapse manually if necessary
                const target = document.querySelector(this.getAttribute('data-bs-target'));
                if (target) {
                    target.classList.toggle('show');
                }
            });
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
