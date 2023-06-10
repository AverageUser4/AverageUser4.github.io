import projects, { baseRepoUrl, baseLiveUrl } from "./projects.js";

function render() {
  const projectsList = document.querySelector('.projects-list');

  for(let data of projects) {
    const repoUrl = baseRepoUrl + data.name;
    const liveUrl = data.liveUrl || baseLiveUrl + data.name;
    
    projectsList.innerHTML += `
      <li class="project">
        <a  target="_blank" class="thumbnail" href="${liveUrl}">
          <img class="thumbnail__image" src="assets/${data.name}.jpg">
        </a>
        <div class="text-container">
          <div>
            <a target="_blank" href="${liveUrl}">
              <h3>${data.presentationName}</h3>
            </a>
            <p class="technologies">${data.technologies}</p>
            <p class="desc">${data.description}</p>
          </div>
          <div>
            <a target="_blank" href="${repoUrl}">Source Code</a> |
            <a target="_blank" href="${liveUrl}">See Live</a>
          </div>
        </div>
      </li>
    `;
  }
}

render();