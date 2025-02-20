const projects = [
    {
        name: "FRUG: A Gamedev framework for Rust",
        link: "https://santyarellano.github.io/frug_book/",
        description: "A simple game development framework for Rust that provides a simple API for creating games.",
        image: "images/project1.gif"
    }
];

function loadProjects() {
    const projectContainer = document.getElementById('project-container');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        const imageUrl = project.image || `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.link)}`;
        projectDiv.innerHTML = `
            <h2>${project.name}</h2>
            <a href="${project.link}" target="_blank">View Project</a>
            <p>${project.description}</p>
            <img src="${imageUrl}" alt="${project.name}">
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

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    fadeInSections();
});