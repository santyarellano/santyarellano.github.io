let projects = [
    {
        name: "2D Game Engine",
        devs: ["C++", "Lua", "SDL2"],
        desc: "A 2D Game Engine with scripting and level/scenario generating funtionality.",
        img: "cabin.png"
    },
    {
        name: "Dungeon Monster",
        devs: ["Java"],
        desc: "A 2D mini platformer game.",
        img: "cabin.png"
    },
    {
        name: "Find The Door",
        devs: ["GMS2"],
        desc: "A top-to-down 2D game with gamepad, split screen, and inventory functions.",
        img: "cabin.png"
    }
]

let projectsDiv = document.getElementById("projects_div");

// generate html of projects
projects.forEach(p => {
    let itemDiv = document.createElement("div");
    itemDiv.className = "portfolio-item mx-auto";
    itemDiv.setAttribute("data-toggle", "modal");
    itemDiv.setAttribute("data-target", "#portfolioModal1");

    let contentDiv = document.createElement("div");
    contentDiv.className = "portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100";

    let textDiv = document.createElement("div");
    textDiv.className = "portfolio-item-caption-content text-center text-white";

    let lBreak = document.createElement("br");
    let title = document.createElement("strong");
    title.innerHTML = p.name;
    textDiv.appendChild(title);
    textDiv.appendChild(lBreak);

    let desc = document.createElement("p");
    desc.innerHTML = p.desc;
    textDiv.appendChild(desc);

    let img = document.createElement("img");
    img.className = "img-fluid";
    img.src = "assets/img/portfolio/" + p.img;

    contentDiv.appendChild(textDiv);
    contentDiv.appendChild(img);
    itemDiv.appendChild(contentDiv);

    projectsDiv.appendChild(itemDiv);
});