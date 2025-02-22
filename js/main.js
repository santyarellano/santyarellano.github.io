document.addEventListener('DOMContentLoaded', function () {
    loadSocialMediaIcons();
});

const socialMediaData = [
    {
        "Item": "LinkedIn",
        "link": "https://www.linkedin.com/in/s-arellano/",
        "icon": "fa-linkedin-square",
        "color": "#0000FF"
    },
    {
        "Item": "Twitter",
        "link": "https://twitter.com/santyarellano",
        "icon": "fa-twitter",
        "color": "#1DA1F2"
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