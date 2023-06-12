export const baseRepoUrl = 'https://github.com/AverageUser4/';
export const baseLiveUrl = 'https://averageuser4.github.io/';

export const projectsData = [
  {
    name: 'ms-paint-remake',
    presentationName: 'MS Paint Remake',
    technologies: 'React, Canvas API',
    description: `Supports most features of MS Paint (selection, shapes, flood fill, etc.). 
    It can be moved around, resized and embedded on any page. There are still some minor
    things I want to add / fix, but it's mostly finished.`,
  },
  {
    name: 'smilga-comfy-sloth-e-commerce',
    presentationName: 'E-Commerce SPA - Comfy Sloth',
    technologies: 'React, React Router',
    description: `Pretty polished e-commerce website. Has a bunch of neat features like
    storing cart state when user leaves page, merging guest cart with user cart when
    user logs in, taking limited stock into account when user tries to buy something.`,
  },
  {
    name: 'e-commerce-salinaka',
    presentationName: 'E-Commerce SPA - Salinaka',
    technologies: 'Typescript, React, Redux, React Router',
    description: `Single Page Application based on project by JULIUS GUEVARRA. Stores user and cart
    data inside Redux store. Was mostly built to learn Redux, so it's not as polished as previous one.`,
  },
  {
    name: 'curved-text-generator',
    presentationName: 'Curved Text Generator',
    technologies: 'HTML, SCSS, JavaScript',
    description: `This app lets you easily generate text curved along an SVG path. You can create
    multiple paths of different kinds (cubic bezier, quadratic bezier, ellipsis), choose shown text and its style,
    use font uploaded from your machine for preview and, automatically crop resulting SVG to be as small as possible.`,
  },
  {
    name: 'landing-page-cypress',
    presentationName: 'Cypress Landing Page Remake',
    technologies: 'React',
    description: `Remake of fancy Cypress landing page.`,
  },
  {
    name: 'landing-page-tesla',
    presentationName: 'Tesla Landing Page Remake',
    technologies: 'HTML, SCSS, JavaScript',
    description: `Beautiful remake of Tesla landing page. Includes annoying scroll feature!`,
  },
  {
    name: 'php-chat',
    presentationName: 'PHP Chat',
    technologies: 'PHP, MySQL',
    description: `Simple chatting app written in PHP and MySQL. You can create account, but it's optional
    - you can chat as a guest aswell. If you decide to create account later, your messages written as guest will
    be then listed under your account. You can change color of your profile picture to show everyone your 
    true personality!`,
    liveUrl: 'https://superchat123456789.000webhostapp.com/html_or_php/chat_room.php',
  },
  {
    name: 'windows-10-calculator-remake',
    presentationName: 'Windows 10 Calculator Remake',
    technologies: 'HTML, CSS, JavaScript',
    description: `One of my first JavaScript projects (i had some prior programming experience).
      It's an exact copy of Windows 10's calculator, supporting all calculations from
      the "standard" section as well as memory and history features. It can be moved around,
      resized and operated with keyboard or mouse.`,
  },
  {
    name: 'smilga-cocktails',
    presentationName: 'The Cocktail DataBase',
    technologies: 'React',
    description: `Simple React app making use of data from TheCocktailDB. Search for your
    favorite cocktail and find out more about it on it's dedicated page!`,
  },
];

export const techData = [
  {
    images: ['html.svg', 'css.svg', 'js.svg', 'react.svg'],
    description: `HTML, CSS, JavaScript and React are the technologies I'm most familiar with.
    I've gained solid practical experience with them by building plenty of apps
    and theoretical knowledge about them from resources like MDN and React docs.`
  },
  {
    images: ['ts.svg'],
    description: `I've built a few projects with TypeScript and learned most of the core concepts
    form The TypeScript Handbook quite well. It's one of the technologies I'm going to focus on learning
    the most in the nearest future.`
  },
  {
    images: ['git.svg'],
    description: `I have pretty good understanding of most common concepts like branches, merge, rebase, stash and a couple more things.`
  },
  {
    images: ['node.svg', 'express.svg'],
    description: `I have basic experience with Node and Express. I'm going to focus on them more in the nearest future,
    as I need backend for some of my upcoming projects.`
  },
  {
    images: ['jest.svg', 'cypress.svg', 'rtl.png'],
    description: `I have some experience with testing frontend apps using Jest, Cypress and React Testing Library.
    I wouldn't call myself particularly good at using any of them, but there's a basis to build upon
    in the future.`
  },
  {
    images: ['sass.svg'],
    description: `I've only used basic features of SASS and it was a while ago (I'm using mostly css modules now), but
    I will gladly get deeper into it, if needed.`
  },
  {
    images: ['redux.svg'],
    description: `I went through most of the official Redux Essentials tutorial and built a few simple apps with it.
    I will gladly get deeper into it, if needed.`
  },
  {
    images: ['php.svg', 'mysql.svg'],
    description: `I technically have some experience working with PHP and MySQL, but it was a while ago when I last
    used them.`
  },
];