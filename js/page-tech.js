import { techData } from "./data.js";

export default function render(container) {
  container.innerHTML = `<h2>Technologies I'm familiar with</h2>`;
  
  const techList = document.createElement('ul');
  techList.classList.add('tech-list');

  container.appendChild(techList);

  for(let data of techData) {
    techList.innerHTML += `
      <li class="tech-item">
        <div class="icons-group">
          ${data.images.reduce((a, c) => a + `<img class="icon" src="assets/icons/${c}">`, '')}
        </div>
        <p class="para" style="text-align: center">${data.description}</p>
      </li>
    `;
  }
}