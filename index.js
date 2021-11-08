function openMenu() {
  document.querySelector(".popup-menu").classList.toggle("open-menu");
}

const projects = [
  {
    name: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "images/Img-placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    demoLink: "#",
    srcLink: "#",
  },
  {
    name: "Website Protfolio",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "images/Img-placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    demoLink: "#",
    srcLink: "#",
  },
  {
    name: "Professional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "images/Img-placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    demoLink: "#",
    srcLink: "#",
  },
  {
    name: "Website Protfolio",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "images/Img-placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    demoLink: "#",
    srcLink: "#",
  },
  {
    name: "Professional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "images/Img-placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    demoLink: "#",
    srcLink: "#",
  },
  {
    name: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "images/Img-placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    demoLink: "#",
    srcLink: "#",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  projects.forEach((project) => {
    let div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = 
        `<div class="project-card">
          <div class="card-content">
            <h2 class="card-title">${project.name}</h2>
            <p class="txt-white">${project.description}</p>
            <ul class="card-technologies">
              ${project.technologies.map((tech) => (
                `<li>${tech}</li>`
              )).join('')}
            </ul>
            </div>
            <button type="button" class="btn see-project-btn">
              See Project
            </button>
          </div>`;
    document.querySelector(".projects-cards").appendChild(div);
  });

  document
    .querySelectorAll(".ddl-menu, .popup-menu a, .close-menu")
    .forEach((el) => {
      el.addEventListener("click", () => {
        openMenu();
      });
    });
});
