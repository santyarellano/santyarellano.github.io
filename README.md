# Game Developer Portfolio

This is a portfolio website for a game developer showcasing various projects. The website is designed to be responsive and visually appealing, featuring diagonal dividers and fade effects for a smooth user experience.

## Project Structure

The project consists of the following files and directories:

```
game-developer-portfolio
├── css
│   ├── styles.css        # Styles for the portfolio
├── images
│   ├── project1.gif      # GIF for the first project
│   ├── project2.gif      # GIF for the second project
│   └── project3.gif      # GIF for the third project
├── js
│   ├── scripts.js        # JavaScript for dynamic content and effects
├── index.html            # Main HTML document for the portfolio
└── README.md             # Project documentation
```

## Getting Started

To set up the portfolio locally, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd game-developer-portfolio
   ```

2. **Open `index.html`**: You can open the `index.html` file in your web browser to view the portfolio.

3. **Customize the Portfolio**:
   - Edit the `index.html` file to add or modify project entries.
   - Update the `css/styles.css` file to change styles as needed.
   - Modify `js/scripts.js` for any interactive features or to load new project data dynamically.

## Adding New Projects

To add a new project to the portfolio:

1. Add a new image or GIF to the `images` directory.
2. Update the `index.html` file to include a new section for the project, using the following template:

   ```html
   <div class="project">
       <h2>Project Name</h2>
       <a href="project-link.html">View Project</a>
       <p>Short description of the project.</p>
       <img src="images/new-project.gif" alt="Project Name">
   </div>
   ```

3. Ensure that the new project section follows the existing layout and styling.

## License

This project is open-source and available for use and modification. Feel free to contribute or customize it for your own portfolio needs.