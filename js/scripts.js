/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when a link is clicked
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click(); // Simulates a click on the navbar toggler
            }
        });
    });

    // Certifications Data (JSON)
    const certifications = [
        { "title": "PowerBI PL-300", "year": "2024" },
        { "title": "Career Essentials in GitHub Professional Certificate", "year": "2024" },
        { "title": "BPP NVQ Level 3 Data Technician", "year": "2023" },
        { "title": "Coursera Google Data Analytics Professional Certificate", "year": "2023" },
        { "title": "Paragon Skills NVQ Level 3 Business Administration", "year": "2020" },
        { "title": "Sheffield Hallam University, BSc, Computing Visualisation", "year": "2009" }
    ];

    // Function to render certifications dynamically
    const renderCertifications = () => {
        const container = document.getElementById("certifications-container");
        if (container) {  // Check if container exists to avoid errors
            certifications.forEach(cert => {
                const certBox = document.createElement("div");

                // Add responsive Bootstrap classes here
                certBox.classList.add("col-sm-6", "col-md-4", "col-lg-3", "mb-4");

                certBox.innerHTML = `
                    <div class="certification-box">
                        <i class="fa-solid fa-medal"></i>
                        <h3>${cert.title}</h3>
                        <p>${cert.year}</p>
                    </div>
                `;
                container.appendChild(certBox);
            });
        }
    };

    // Render certifications when page loads
    renderCertifications();

});
