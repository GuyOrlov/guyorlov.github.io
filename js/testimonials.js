fetch('data/testimonials.json')
    .then(response => response.json())
    .then(data => {
        const testimonialsContainer = document.getElementById('testimonials-container');
        data.forEach(testimonial => {
            testimonialsContainer.innerHTML += `
                <div class="testimonial">
                    <p class="lead">"${testimonial.text}"</p>
                    <p><strong>- ${testimonial.author}</strong></p>
                </div>
            `;
        });
    });
