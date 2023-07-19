import projectsRender from './page-projects.js';
import techRender from './page-tech.js';
// import aboutRender from './page-about.js';
import contactRender from './page-contact.js';

const render = { projectsRender, techRender, contactRender, /* aboutRender */ };
const main = document.querySelector('.main');
const navList = document.querySelector('.nav-list');
const navButtons = document.querySelectorAll('.nav-button');

navList.addEventListener('click', (event) => {
  const { target, currentTarget } = event; 

  switch(target.id) {
    case 'projects':
    case 'tech':
    // case 'about':
    case 'contact':
      render[`${target.id}Render`](main);
      navButtons.forEach(button => button.classList.remove('nav-button--active'));
      target.classList.add('nav-button--active');
      break;

    default:
      if(target !== currentTarget) {
        console.error('Unexpected click target:', target);
      }
  }
});

navButtons[0].click();