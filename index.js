import projects, { baseRepoUrl, baseLiveUrl } from "./projects.js";

function render() {
  const projectsList = document.querySelector('.projects-list');

  for(let data of projects) {
    const repoUrl = baseRepoUrl + data.name;
    const liveUrl = data.liveUrl || baseLiveUrl + data.name;
    
    projectsList.innerHTML += `
      <li class="project">
        <a  target="_blank" class="thumbnail" href="${liveUrl}">
          <img class="thumbnail__image" src="assets/thumbnails/${data.name}.jpg">
        </a>
        <div class="text-container">
          <div>
            <h3>
              <a target="_blank" href="${liveUrl}">
                ${data.presentationName}
              </a>
            </h3>
            <p class="technologies">${data.technologies}</p>
            <p class="desc">${data.description}</p>
          </div>
          <div class="buttons-container">
            <a class="button" target="_blank" href="${repoUrl}">
              Source Code
              <img src="assets/icons/github.svg">
            </a>
            <a class="button" target="_blank" href="${liveUrl}">
              See Live
              <img src="assets/icons/webpage.svg">
            </a>
          </div>
        </div>
      </li>
    `;
  }
}

render();