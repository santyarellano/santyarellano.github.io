let projects = [
  {
    name: "2D Game Engine",
    devs: ["C++", "Lua", "SDL2"],
    desc:
      "A 2D Game Engine with scripting and level/scenario generating funtionality.",
    icon: "car",
  },
  {
    name: "Dungeon Monster",
    devs: ["Java"],
    desc: "A 2D mini platformer game.",
    img: "cabin.png",
  },
  {
    name: "Find The Door",
    devs: ["GMS2"],
    desc:
      "A top-to-down 2D game with gamepad, split screen, and inventory functions.",
    img: "cabin.png",
  },
];

let projectsDiv = document.getElementById("projects_div");

// generate html of projects
projects.forEach((p) => {
  let itemDiv = document.createElement("div");
  itemDiv.className = "card";
  itemDiv.style.width = "18rem";

  if (p.icon != null) {
    // uses icon
    let iconDiv = document.createElement("div");
    let icon = document.createElement("i");
    icon.className = "fas fa-" + p.icon;
    iconDiv.appendChild(icon);
    itemDiv.appendChild(iconDiv);
  } else if (p.img != null) {
    // uses image
    console.log(p.name + " img");
  }

  // Title
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  let cardText = document.createElement("h4");
  cardText.className = "card-text";
  cardText.innerHTML = p.name;
  cardBody.appendChild(cardText);
  itemDiv.appendChild(cardBody);

  projectsDiv.appendChild(itemDiv);
});
