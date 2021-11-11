function openMenu() {
  document.querySelector('.popup-menu').classList.toggle('open-menu');
}

function persistFormData(element) {
  element.addEventListener('input', () => {
    const localFormData = JSON.parse(localStorage.getItem('localFormData'));
    localFormData[element.name] = element.value;
    if (
      !localFormData.fullName
      && localFormData.firstName
      && localFormData.lastName
    ) {
      localFormData.fullName = `${localFormData.firstName} ${localFormData.lastName}`;
    }
    if (localFormData.fullName) {
      const nameString = localFormData.fullName.split(' ');
      localFormData['firstName'] = nameString[0];
      localFormData['lastName'] = nameString[nameString.length - 1];
    }
    localStorage.setItem('localFormData', JSON.stringify(localFormData));
  });
}

const projects = [
  {
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'images/Img-placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'images/Img-placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    name: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'images/Img-placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'images/Img-placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
    name: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: 'images/Img-placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    demoLink: '#',
    srcLink: '#',
  },
  {
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
    div.innerHTML = `<div class="project-card">
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
    button.addEventListener('click', () => {
      document.querySelector('body').style.overflow = 'hidden';
      document.querySelector('body').classList.add('blur');
      close.addEventListener('click', () => {
        modalContainer.classList.remove('active-modal');
      });
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
