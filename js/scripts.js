/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

// Certifications Data (JSON)
const certifications = [
    { title: "PowerBI PL-300", year: "2025" },
    { title: "Career Essentials in GitHub Professional Certificate", year: "2024" },
    { title: "BPP NVQ Level 3 Data Technician", year: "2023" },
    { title: "Coursera Google Data Analytics Professional Certificate", year: "2023" },
    { title: "Paragon Skills NVQ Level 3 Business Administration", year: "2020" },
    { title: "Sheffield Hallam University, BSc, Computing Visualisation", year: "2009" }
];

// Function to render certifications dynamically
const renderCertifications = () => {
    const container = document.getElementById("certifications-container");
    if (container) {
        if (certifications.length === 0) {
            container.innerHTML = '<p>No certifications available at this time.</p>';
            return;
        }

        const fragment = document.createDocumentFragment();
        certifications.forEach(cert => {
            if (cert.title && cert.year) {
                const certBox = document.createElement("div");
                certBox.classList.add("col-sm-6", "col-md-4", "col-lg-3", "mb-4");
                certBox.innerHTML = `
                    <div class="certification-box" tabindex="0">
                        <i class="fa-solid fa-medal" aria-hidden="true"></i>
                        <h3>${cert.title}</h3>
                        <p>${cert.year}</p>
                    </div>
                `;
                fragment.appendChild(certBox);
            }
        });
        container.appendChild(fragment);
    } else {
        console.error('Certifications container not found.');
    }
};

// Render certifications when page loads
renderCertifications();
