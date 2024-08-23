// JavaScript to change banner background on scroll
window.addEventListener('scroll', function() {
    const banner = document.querySelector('.banner');
    
    // Check if the page is scrolled more than 50px from the top
    if (window.scrollY > 50) {
        banner.classList.add('scrolled');
    } else {
        banner.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            // Load Services Section
            const servicesContent = document.querySelector('.services-content');
            if (servicesContent) {
                const servicesHtml = data.services.map(service => `
                    <div class="service-item">
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                    </div>
                `).join('');
                servicesContent.innerHTML = servicesHtml;
            }

            // Load Projects Section
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.querySelector('h2').textContent = data.projects[0].title;
                projectsSection.querySelector('p').innerHTML = data.projects[0].description;
            }

            // Load Careers Section
            const careersSection = document.getElementById('careers');
            if (careersSection) {
                careersSection.querySelector('h2').textContent = data.careers.title;
                careersSection.querySelector('p').innerHTML = data.careers.description;
            }

            // Load About Section
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.querySelector('h2').textContent = data.about.title;
                aboutSection.querySelector('p').innerHTML = data.about.description;
            }
        })
        .catch(error => console.error('Error loading content:', error));
});
