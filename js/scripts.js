const projects = [
    {
        name: "Project One",
        link: "https://example.com/project1",
        description: "An exciting adventure game that takes players on a journey through a mystical world.",
        image: "images/project1.gif"
    },
    {
        name: "Project Two",
        link: "https://example.com/project2",
        description: "A fast-paced puzzle game that challenges players to think quickly and strategically.",
        image: "images/project2.gif"
    },
    {
        name: "Project Three",
        link: "https://example.com/project3",
        description: "A multiplayer online battle arena game that pits players against each other in epic battles.",
        image: "images/project3.gif"
    }
];

function loadProjects() {
    const projectContainer = document.getElementById('project-container');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h2>${project.name}</h2>
            <a href="${project.link}" target="_blank">View Project</a>
            <p>${project.description}</p>
            <img src="${project.image}" alt="${project.name}">
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