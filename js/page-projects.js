import { projectsData, baseRepoUrl, baseLiveUrl } from "./data.js";

export default function render(container) {
  container.innerHTML = `<h2>Some of my projects</h2>`;
  
  const projectsList = document.createElement('ul');
  projectsList.classList.add('projects-list');

  container.appendChild(projectsList);

  for(let data of projectsData) {
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
            <p class="para">${data.description}</p>
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