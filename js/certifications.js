// Select the certifications container
const certificationsContainer = document.getElementById('certifications-container');

// Define the certifications content
const certificationsHTML = `
    <ul class="fa-ul mb-0">
        <li>
            <span class="fa-li"><i class="fa-solid fa-medal"></i></span>
            PowerBI PL-300 - 2024
        </li>
        <li>
            <span class="fa-li"><i class="fa-solid fa-medal"></i></span>
            Career Essentials in GitHub Professional Certificate - 2024
        </li>
        <li>
            <span class="fa-li"><i class="fa-solid fa-medal"></i></span>
            BPP NVQ Level 3 Data Technician - 2023
        </li>
        <li>
            <span class="fa-li"><i class="fa-solid fa-medal"></i></span>
            Coursera Google Data Analytics Professional Certificate - 2023
        </li>
        <li>
            <span class="fa-li"><i class="fa-solid fa-medal"></i></span>
            Paragon Skills NVQ Level 3 Business Administration - 2020
        </li>
        <li>
            <span class="fa-li"><i class="fa-solid fa-medal"></i></span>
            Sheffield Hallam University, BSc, Computing Visualisation - 2009
        </li>
    </ul>
`;

// Insert the certifications content into the container
if (certificationsContainer) {
    certificationsContainer.innerHTML = certificationsHTML;
}
