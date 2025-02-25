// loading stuff
document.addEventListener('DOMContentLoaded', function () {
    loadSocialMediaIcons();
    loadAboutMeText();
    loadProjects();
    loadExperience();

    // particles
    const colors = ['#d04fff', '#59a7ff', '#71f579'];
    const numParticles = 150;
    createParticles(document.body, colors, numParticles);
});

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ================== DATA ==================
const socialMediaData = [
    {
        "Item": "LinkedIn",
        "link": "https://www.linkedin.com/in/s-arellano/",
        "icon": "fa fa-linkedin-square",
        "color": "#ADD8E6" // light blue
    },
    {
        "Item": "Github",
        "link": "https://github.com/santyarellano",
        "icon": "fa fa-github",
        "color": "#ADD8E6" // light blue
    },
    {
        "Item": "Itch",
        "link": "https://santyarellano.itch.io",
        "icon": "fa-brands fa-itch-io",
        "color": "#ADD8E6" // light blue
    }
];

const projectsData = [
    {
        "name": "FRUG",
        "description": "A simple game dev framework for Rust, with a focus on documentation, including tutorials and examples for easy learning.",
        "asset": "assets/gifs/frug.gif",
        "link": "https://santyarellano.github.io/frug_book/",
        "classes": "no-interpolation"
    },
    {
        "name": "In The Grid",
        "description": "A game made for the Global Game Jam 2022. Top down shooter made with original assets (music and sprites). Won best game of that jam region (sponsored by TLM)",
        "asset": "assets/images/ms_glitch.png",
        "link": "https://santyarellano.itch.io/in-the-grid",
        "classes": "no-interpolation"
    },
    {
        "name": "Kings of Wings",
        "description": "My first finished and published game while I was a student. Includes local multiplayer, story mode, character/map selector, etc.",
        "asset": "assets/images/kings_of_wings.png",
        "link": "https://store.steampowered.com/app/1162820/Kings_Of_Wings/",
        "classes": ""
    }
];

const experienceData = [
    {
        "Title": "Software Engineer",
        "Company": "Microsoft",
        "Start Date": "Oct 2023",
        "End Date": "",
        "Is Current": true,
        "Location": "Redmond, WA",
        "Description": "Working on custom access proxies development for security products (Global Secure Access service). My day to day includes working with C# and Rust and usually involves tasks related to encryption, networking, and performance."
    },
    {
        "Title": "Software Engineering Intern",
        "Company": "Twitter",
        "Start Date": "Sep 2022",
        "End Date": "Nov 2022",
        "Is Current": false,
        "Location": "Remote",
        "Description": "Worked on the Notifications team, integrating a sensor & ML framework to improve user interaction. Unfortunately the project was interrupted by the Elon Musk acquisition and the project was shut down."
    },
    {
        "Title": "Software Engineering Intern",
        "Company": "Microsoft",
        "Start Date": "Jun 2022",
        "End Date": "Sep 2022",
        "Is Current": false,
        "Location": "Redmond, WA",
        "Description": "Worked on Identity and Access Management team. Implemented a new feature to verify and monitor the access of users to a given resource tree. The feature was implemented in C# and KnockoutJs."
    },
    {
        "Title": "Software Engineering Intern",
        "Company": "Oracle",
        "Start Date": "Sep 2021",
        "End Date": "Mar 2022",
        "Is Current": false,
        "Location": "Remote",
        "Description": "Worked on test development for a new product. My day to day job involved python scripting and C & SQL for tests."
    },
    {
        "Title": "Software Engineering Intern",
        "Company": "Twitter",
        "Start Date": "Jun 2021",
        "End Date": "Aug 2022",
        "Is Current": false,
        "Location": "Remote",
        "Description": "Worked the chats platform team. Implemented the button to scroll to the bottom in a conversation, and pin conversation features. Also improved the way tweets were displayed in a conversation. Usually worked with Kotlin, Java, and XML."
    }
];
// ================== DATA ==================

function loadAboutMeText() {
    const url = 'https://raw.githubusercontent.com/santyarellano/santyarellano.github.io/refs/heads/master/assets/text/about_me.txt';
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const formattedText = data.replace(/\n/g, '<br>').replace(/\r/g, '');
            document.getElementById("about-me-text").innerHTML = formattedText;
        })
        .catch(error => console.error('Error loading file:', error));
}

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
    const bodyHeight = document.body.scrollHeight; // Full height of the body

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * bodyHeight}px`;
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
                    <h4 class="card-title"><strong>${project.name}</strong></h4>
                    <img src="${project.asset}" class="card-img-top ${project.classes}" alt="${project.name}">
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

function loadExperience() {
    const experienceContainer = document.getElementById('experience-container');
    experienceData.forEach(experience => {
        const experienceElement = document.createElement('div');
        experienceElement.className = 'col-md-4 mb-4';
        experienceElement.innerHTML = `
            <div class="card text-center h-100">
                <div class="card-body">
                    <h4 class="card-title"><strong>${experience.Title}</strong></h4>
                    <hr>
                    <p class="card-text">${experience.Description}</p>
                </div>
            </div>
        `;

        experienceContainer.appendChild(experienceElement);
    });
}