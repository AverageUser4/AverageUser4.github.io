export default function render(container) {
  container.innerHTML = `<h2>Technologies I'm familiar with</h2>`;
  
  const techList = document.createElement('ul');
  techList.classList.add('tech-list');

  container.appendChild(techList);

  techList.innerHTML += `
    <li class="tech-item">
      <div class="icons-group">
        <img class="icon" src="assets/icons/html.svg">
        <img class="icon" src="assets/icons/css.svg">
        <img class="icon" src="assets/icons/js.svg">
        <img class="icon" src="assets/icons/react.svg">
      </div>
      <p class="para">
        HTML, CSS, JavaScript and React are the technologies I'm most familiar with.
        I've gained solid practical experience with them by building plenty of apps
        and theoretical knowledge about them from resources like MDN and React docs.
      </p>
    </li>
    <li class="tech-item">
      <div class="icons-group">
        <img class="icon" src="assets/icons/ts.svg">
      </div>
      <p class="para">
        I've built a few projects with TypeScript and learned most of the core concepts
        form The TypeScript Handbook quite well. It helped me a lot by catching
        sneaky bugs in my code, so I plan on using it as much as possible in my upcoming
        projects to get really comfortable with it.
      </p>
    </li>
    <li class="tech-item">
      <div class="icons-group">
        <img class="icon" src="assets/icons/git.svg">
      </div>
      <p class="para">
        My knowledge of Git is not limited to "git push / git commit". I have pretty good understanding
        of most common concepts like branches, merge, rebase, stash and a couple more things.
      </p>
    </li>
    <li class="tech-item">
      <div class="icons-group">
        <img class="icon" src="assets/icons/jest.svg">
        <img class="icon" src="assets/icons/cypress.svg">
        <img class="icon" src="assets/icons/rtl.png">
      </div>
      <p class="para">
        I have some experience with testing frontend apps using Jest, Cypress and React Testing Library.
        I wouldn't call myself particularly good at using any of them, but there's a basis to build upon
        in the future.
      </p>
    </li>
    <li class="tech-item">
      <div class="icons-group">
        <img class="icon" src="assets/icons/sass.svg">
      </div>
      <p class="para">
        I've only used basic features of SASS and it was a while ago (I'm using mostly css modules now), but
        I will gladly get deeper into it, if needed.
      </p>
    </li>
    <li class="tech-item">
      <div class="icons-group">
        <img class="icon" src="assets/icons/redux.svg">
      </div>
      <p class="para">
        I went through most of the official Redux Essentials tutorial and built a few simple apps with it.
        I will gladly get deeper into it, if needed.
      </p>
    </li>
    <li class="tech-item">
      <div class="icons-group">
        <img class="icon" src="assets/icons/php.svg">
        <img class="icon" src="assets/icons/mysql.svg">
      </div>
      <p class="para">
        I technically have some experience working with PHP and MySQL, but it was a while ago when I last
        used them.
      </p>
    </li>
  `;
}