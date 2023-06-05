import projects from "./projects.js";

const themeButton = document.querySelector('#theme-button');
const stylesheet = new CSSStyleSheet();
stylesheet.insertRule('* { color-scheme: dark }');
document.adoptedStyleSheets.push(stylesheet);


function render() {
  const projectsList = document.querySelector('.projects-list');

  for(let data of projects) {
    projectsList.innerHTML += `
      <li class="project">
        <a class="thumbnail" href="https://averageuser4.github.io/${data.name}">
          <img class="thumbnail__image" src="assets/${data.name}.jpg">
        </a>
        <div class="description">
          <h3>${data.presentationName}</h3>
          <p>${data.technologies}</p>
          <p>${data.description}</p>
          <a target="_blank" href="https://github.com/AverageUser4/${data.name}">Source Code</a> |
          <a target="_blank" href="https://averageuser4.github.io/${data.name}">Live on GitHub</a>
        </div>
      </li>
    `;
  }
}

render();