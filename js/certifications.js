const certifications = [
    { title: "PL-300: Microsoft Power BI Data Analyst", institution: "Microsoft", date: "2024" },
    { title: "SQL Basics Certification", institution: "Codecademy", date: "2023" },
];

const certificationsContainer = document.getElementById('certifications-container');
certifications.forEach(cert => {
    const certDiv = document.createElement('div');
    certDiv.classList.add('certification');
    certDiv.innerHTML = `
        <h3>${cert.title}</h3>
        <p>${cert.institution} - ${cert.date}</p>
    `;
    certificationsContainer.appendChild(certDiv);
});
