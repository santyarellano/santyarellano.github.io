document.addEventListener('DOMContentLoaded', function () {
    loadSocialMediaIcons();

    const colors = ['#d04fff', '#59a7ff', '#71f579'];
    const numParticles = 100;
    createParticles(document.body, colors, numParticles);

    loadProjects();
});

// ================== DATA ==================
const socialMediaData = [
    {
        "Item": "LinkedIn",
        "link": "https://www.linkedin.com/in/s-arellano/",
        "icon": "fa-linkedin-square",
        "color": "#ADD8E6" // light blue
    },
    {
        "Item": "Twitter",
        "link": "https://twitter.com/santyarellano",
        "icon": "fa-twitter",
        "color": "#ADD8E6" // light blue
    }
];

const projectsData = [
    {
        "name": "FRUG",
        "description": "A simple game dev framework for Rust, with a focus on documentation, including tutorials and examples for easy learning.",
        "asset": "assets/gifs/frug.gif",
        "link": "https://santyarellano.github.io/frug_book/"
    },
    {
        "name": "In The Grid",
        "description": "A game made for the Global Game Jam 2022. Top down shooter made with original assets (music and sprites).",
        "asset": "assets/images/ms_glitch.png",
        "link": "https://santyarellano.itch.io/in-the-grid"
    }
];
// ================== DATA ==================

function loadSocialMediaIcons() {
    const socialMediaContainer = document.getElementById('social-media');
    socialMediaData.forEach(item => {
        const iconElement = document.createElement('i');
        iconElement.className = `fa ${item.icon}`;
        iconElement.style.color = item.color;
        iconElement.style.margin = '0 10px';
        iconElement.style.cursor = 'pointer';
        iconElement.addEventListener('click', () => {
            window.open(item.link, '_blank');
        });
        socialMediaContainer.appendChild(iconElement);
    });
}

function createParticles(container, colors, numParticles) {
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.width = `${Math.random() * 20 + 10}px`; // random width between 10px and 30px
        particle.style.height = particle.style.width; // make height equal to width for a square shape
        particle.style.animationDelay = `${Math.random() * 3}s`; // random delay between 0s and 3s for movement
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`; // random duration between 2s and 5s
        particle.style.setProperty('--final-opacity', Math.random().toFixed(2)); // random final opacity between 0 and 1
        container.appendChild(particle);
    }
}

function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projectsData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'col-md-4 mb-4';
        projectElement.innerHTML = `
            <div class="card text-center h-100">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <img src="${project.asset}" class="card-img-top" alt="${project.name}">
                    <hr>
                    <p class="card-text">${project.description}</p>
                </div>
                
                <div class="card-footer">
                    <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
}