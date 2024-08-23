
document.addEventListener('DOMContentLoaded', function () {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            // Load Services Section
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                const servicesContent = data.services.map(service => `
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                `).join('');
                servicesSection.innerHTML += servicesContent;
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
