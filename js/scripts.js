/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Theme Switcher functionality
    const themeSwitcher = document.querySelector('.theme-switcher input[type="checkbox"]');
    
    // Apply initial theme based on current body class
    if (document.body.classList.contains('bg-dark-theme')) {
        themeSwitcher.checked = true;
    }

    // Event listener for theme switcher toggle
    themeSwitcher.addEventListener('change', function() {
        toggleTheme();
    });

    // Function to toggle between light and dark theme
    function toggleTheme() {
        var body = document.body;
        
        // Toggle between light and dark themes
        if (body.classList.contains('bg-light-theme')) {
            body.classList.remove('bg-light-theme');
            body.classList.add('bg-dark-theme');
        } else {
            body.classList.remove('bg-dark-theme');
            body.classList.add('bg-light-theme');
        }
    }

});
