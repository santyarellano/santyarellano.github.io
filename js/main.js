document.addEventListener('DOMContentLoaded', function () {
    loadSocialMediaIcons();

    const colors = ['#d04fff', '#59a7ff', '#71f579'];
    const numParticles = 100;
    createParticles(document.body, colors, numParticles);
});

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