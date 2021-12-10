function openMenu() {
  document.querySelector('.popup-menu').classList.toggle('open-menu');
}

function persistFormData(element) {
  element.addEventListener('input', () => {
    const localFormData = JSON.parse(localStorage.getItem('localFormData'));
    localFormData[element.name] = element.value;
    localStorage.setItem('localFormData', JSON.stringify(localFormData));
  });
}

const projects = [
  {
    id: 1,
    name: 'TODO list',
    description:
      "A website to keep all your daily todos. You can add, edit, complete and delete todos.",
    imageUrl: 'images/todo-list-project-img.png',
    technologies: ['html', 'css', 'javascript', 'webpacks'],
    demoLink: 'https://shadyshawkat.github.io/TODO-List/dist/',
    srcLink: 'https://github.com/ShadyShawkat/TODO-List',
  },
  {
    id: 2,
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'images/Img-placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    id: 3,
    name: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'images/Img-placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    id: 4,
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'images/Img-placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    id: 5,
    name: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'images/Img-placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    id: 6,
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'images/Img-placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  // Setting and getting form data from local storage
  const form = document.querySelector('.contact-form');
  let localFormData = JSON.parse(localStorage.getItem('localFormData'));

  if (!localFormData) {
    localFormData = {
      firstName: '',
      lastName: '',
      fullName: '',
      email: '',
      message: '',
    };
    localStorage.setItem('localFormData', JSON.stringify(localFormData));
  }

  Object.keys(localFormData).forEach((el) => {
    form[el].value = localFormData[el];
  });

  Object.keys(localFormData).forEach((el) => {
    persistFormData(form.elements[el]);
  });

  // Rendering Prjects dynamically
  projects.forEach((project) => {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.innerHTML = `<div class="project-card" id="${project.id}">
          <div class="card-content">
            <h2 class="card-title">${project.name}</h2>
            <p class="txt-white">${project.description}</p>
            <ul class="card-technologies">
              ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
            </div>
            <button type="button" class="btn see-project-btn">
              See Project
            </button>
          </div>`;
          div.querySelector('.project-card').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
          url("${project.imageUrl}")`;
    document.querySelector('.projects-cards').appendChild(div);
  });

  // Opening and closing menu
  document
    .querySelectorAll('.ddl-menu, .popup-menu a, .close-menu')
    .forEach((el) => {
      el.addEventListener('click', () => {
        openMenu();
      });
    });

  const openButtons = document.querySelectorAll(
    '.see-project-btn, .most-recent-project-info button',
  );
  const modalContainer = document.querySelector('.modal-container');
  const close = document.querySelector('.close-modal');

  openButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const project = projects.find(project => project.id === parseInt(e.target.parentNode.id));
      console.log(project)
      document.querySelector('body').style.overflow = 'hidden';
      document.querySelector('body').classList.add('blur');
      close.addEventListener('click', () => {
        modalContainer.classList.remove('active-modal');
      });
      modalContainer.querySelector('.modal-title').textContent = project.name;
      modalContainer.querySelector('.technologies-used-list').innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join("");
      modalContainer.querySelector('.modal-img').src = project.imageUrl;
      modalContainer.querySelector('.modal-text').textContent = project.description;
      modalContainer.querySelector('.see-live-btn').href = project.demoLink;
      modalContainer.querySelector('.see-src-btn').href = project.srcLink;
      modalContainer.classList.add('active-modal');
    });
  });

  close.addEventListener('click', () => {
    modalContainer.classList.remove('active-modal');
    document.querySelector('body').classList.remove('blur');
    document.querySelector('body').style.overflow = 'initial';
  });

  // Email form validation
  document.querySelector('.form-btn').addEventListener('click', (event) => {
    const email = document.querySelector(".contact-form input[type='email']");
    const errorSpan = document.querySelector('.error-span');
    const emailInLowerCase = email.value.toLowerCase();
    if (email.validity.patternMismatch) {
      errorSpan.textContent = `Invalid email, This is your email in lower case: ${emailInLowerCase}`;
      event.preventDefault();
    } else {
      errorSpan.textContent = '';
    }
  });
});
