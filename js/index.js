import projectsRender from './page-projects.js';
import techRender from './page-tech.js';

const render = { projectsRender, techRender };
const main = document.querySelector('.main');
const navList = document.querySelector('.nav-list');
const navButtons = document.querySelectorAll('.nav-button');

navList.addEventListener('click', (event) => {
  const { target, currentTarget } = event; 

  switch(target.id) {
    case 'projects':
    case 'tech':
    case 'about':
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

navButtons[1].click();