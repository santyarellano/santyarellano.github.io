let projects = [
  {
    name: "2D Game Engine",
    devs: ["C++", "Lua", "SDL2"],
    desc:
      "A 2D Game Engine with scripting and level/scenario generating funtionality.",
    icon: "cogs",
  },
  {
    name: "Dungeon Monster",
    devs: ["Java"],
    desc: "A 2D mini platformer game.",
    img: "dungeon_monster.png",
    backgroundColor: "#74abfe",
  },
  {
    name: "Find The Door",
    devs: ["GMS2"],
    desc:
      "A top-to-down 2D game with gamepad, split screen, and inventory functions.",
    icon: "gamepad",
  },
];

let color_schemes = [
  {
    background: "#175225",
    icon: "#25e469",
  },
  {
    background: "#421c56",
    icon: "#5ac3dc",
  },
  {
    background: "#8a1f14",
    icon: "#ffbd9c",
  },
  {
    background: "#174672",
    icon: "#f0ffff",
  },
];

let projectsDiv = document.getElementById("projects_div");

// generate html of projects
projects.forEach((p) => {
  let itemDiv = document.createElement("div");
  itemDiv.className = "card project_card";
  itemDiv.style.width = "18rem";

  if (p.icon != null) {
    // select a random color scheme
    let colIndex = getRndInteger(0, color_schemes.length);
    let col = color_schemes[colIndex];

    // uses icon
    let iconDiv = document.createElement("div");
    iconDiv.className = "icon_div";
    iconDiv.style.backgroundColor = col.background;

    let icon = document.createElement("i");
    icon.className = "fas icons fa-" + p.icon;
    icon.style.color = col.icon;
    iconDiv.appendChild(icon);
    itemDiv.appendChild(iconDiv);
  } else if (p.img != null) {
    // uses image
    let imgDiv = document.createElement("div");
    imgDiv.className = "project_img_div";
    imgDiv.style.backgroundColor = p.backgroundColor;
    let img = document.createElement("img");
    img.className = "card-img-top project_img";
    img.setAttribute("alt", p.name + " image.");
    img.src = "images/" + p.img;
    imgDiv.appendChild(img);
    itemDiv.appendChild(imgDiv);
  }

  // Title
  let cardBody = document.createElement("div");
  cardBody.className = "card-body project_body";
  let cardText = document.createElement("h4");
  cardText.className = "card-text";
  cardText.innerHTML = p.name;
  cardBody.appendChild(cardText);
  itemDiv.appendChild(cardBody);

  projectsDiv.appendChild(itemDiv);
});

// functions
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
