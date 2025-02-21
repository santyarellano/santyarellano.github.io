const projects = [
    {
        name: "FRUG",
        link: "https://santyarellano.github.io/frug_book/",
        description: "A simple game development framework for Rust that provides a simple API for creating games.",
        image: "images/frug.gif"
    },
    {
        name: "In the Grid",
        link: "https://santyarellano.itch.io/in-the-grid",
        description: "A simple top-down shooter mini-game made during the GGJ 2022.",
        image: "images/in_the_grid.png"
    },
];

function loadProjects() {
    const projectContainer = document.getElementById('project-container');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        projectDiv.innerHTML = `
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="view-project-button">View Project</a>
            <img src="${project.image}" alt="${project.name}" onerror="this.onerror=null;this.src='default-thumbnail.jpg';">
        `;
        projectContainer.appendChild(projectDiv);
    });
}

function fadeInSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.getBoundingClientRect(); // Trigger reflow
        section.style.transition = 'opacity 1s ease-in-out';
        section.style.opacity = 1;
    });
}

function createParticles() {
    const header = document.querySelector('header');
    const n_particles = 50;
    for (let i = 0; i < n_particles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 20 + 5}px`; // Random width
        particle.style.height = particle.style.width; // Make it a square
        particle.style.opacity = 0; // Start with opacity 0 for fade-in effect
        particle.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay between 0 and 5 seconds
        particle.style.animationDuration = `${Math.random() * 10 + 4}s`; // Random animation duration
        particle.style.animationName = 'float, fadeIn'; // Apply both float and fadeIn animations
        header.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    fadeInSections();
    createParticles();
});