let projects = JSON.parse(localStorage.getItem("projects")) || [
  { id: 1, title: "Site E-commerce", tech: "HTML, CSS, JS", likes: 10 },
  { id: 2, title: "App Météo", tech: "JavaScript, API", likes: 5 },
  { id: 3, title: "Portfolio React", tech: "React, Tailwind", likes: 12 },
];

const projectsList = document.getElementById("projects-list");
const search = document.getElementById("search");
const footerYear = document.getElementById("year");

function renderProjects(list) {
  projectsList.innerHTML = "";
  list.forEach((proj) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.tech}</p>
      <span>${proj.likes}</span>
      <button data-id="${proj.id}">Like</button>
    `;
    projectsList.appendChild(card);
  });
}

renderProjects(projects);


projectsList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = parseInt(e.target.getAttribute("data-id"));
    const project = projects.find((item) => item.id === id);
    project.likes++;
    renderProjects(projects);
    localStorage.setItem("projects", JSON.stringify(projects));
  }
});
