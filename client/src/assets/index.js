import earth from './images/earth.jpg';
import moon from './images/moon.jpg';
import sun from './images/sun-full.png';
import asteroid from './images/asteroid.png';
import asteroid_purple from './images/asteroid_purple.png';
import jupiter from './images/jupiter.jpg';
import mars from './images/mars.jpg';
import neptune from './images/neptune.jpg';
import saturn from './images/saturn.jpg';
import uranus from './images/uranus.jpg';
import login_regex from './images/login_regex.png';
import muzykapp from './images/muzykapp.png';
import portfolio_v1 from './images/portfolio_v1.png';
import portfolio_v2 from './images/portfolio_v2.png';
import react_table from './images/react_table.png';

import {
  javascript,
  html,
  css,
  react,
  nextjs,
  redux,
  figma,
  materialui,
  rapidapi,
  reacttablev7,
  regex,
  bootstrap,
  tailwind,
  vite,
  php,
  mysql,
  nodejs,
  expressjs,
  java,
  python,
  mongodb,
  postman,
  git,
  photoshop,
  vscode,
  linkedin,
  github,
  instagram,
} from './icons';

export { sun, moon, asteroid, asteroid_purple };

export const navbar = [
  { title: 'home.', href: '#home' },
  { title: 'projects.', href: '#projects' },
  { title: 'skills.', href: '#skills' },
  // { title: 'experience.', href: '#experience' },
  { title: 'contact.', href: '#contact' },
  { title: 'resume.', href: '/resume_ddharianto.pdf', target: '_blank' },
];

export const projects = [
  {
    name: 'Muzyk App',
    image: muzykapp,
    bg: jupiter,
    bg_deg: 'rotate-[3deg]',
    desc: `
          A front-end music app using Tailwind as the main CSS styling framework and Redux for handling 
          data/state returned from API such as Shazam API from RapidAPI.
          `,
    stack: [react, tailwind, redux, rapidapi],
    demo: 'https://muzyk.netlify.app/',
  },
  {
    name: 'React Table',
    image: react_table,
    bg: neptune,
    bg_deg: 'rotate-[30deg]',
    desc: `
          An example of a full functioning table using React-Table v7 and styled with Material UI v5.
          `,
    stack: [react, materialui, reacttablev7],
    demo: 'https://ddharianto.github.io/react-table/',
  },
  {
    name: 'Login Form with Regex',
    image: login_regex,
    bg: uranus,
    bg_deg: 'rotate-[98deg]',
    desc: `
            Display basic login, registration, change password, and logout forms in the PHP programming language. 
            The login, registration and change password forms use regex so that users can submit entries that are adjusted by the system.
            `,
    stack: [php, regex, mysql, bootstrap],
    demo: 'https://github.com/ddharianto/login-form-with-regex',
  },
  {
    name: 'Next.js Project (Coming Soon!)',
    image: '',
    bg: saturn,
    bg_deg: 'rotate-[26deg]',
    desc: `
            I would like to try my knowledge and build a project with Next.js.
            `,
    stack: [nextjs],
    demo: '#',
  },
];

export const portfolio = [
  {
    name: 'Portfolio v1',
    image: portfolio_v1,
    bg: earth,
    bg_deg: 'rotate-[25deg]',
    desc: `
          First iteraion of my portfolio design using CRA and Material UI as CSS styling framework.
          `,
    stack: [react, figma, materialui],
    demo: 'https://github.com/ddharianto/ddharianto.github.io/tree/v1.0',
  },
  {
    name: 'Portfolio v2 (Current)',
    image: portfolio_v2,
    bg: mars,
    bg_deg: 'rotate-[25deg]',
    desc: `
          Second iteraion of my portfolio design using Vite with React and Tailwind as CSS styling framework. 
          The main theme on this version is our solar system.
          `,
    stack: [react, vite, tailwind],
    demo: 'https://ddharianto.github.io/',
  },
];

export const skills = [
  {
    name: 'Front-end development',
    id: 'fe',
    stack: [
      javascript,
      html,
      css,
      react,
      redux,
      vite,
      tailwind,
      materialui,
      bootstrap,
    ],
  },
  {
    name: 'Back-end development',
    id: 'be',
    stack: [nodejs, expressjs, java, python, php, mysql, mongodb, postman],
  },
  {
    name: 'Other skills',
    id: 'ot',
    stack: [git, vscode, photoshop, figma],
  },
];

export const contact = [
  {
    icon: github,
    label: '/ddharianto',
    src: 'https://github.com/ddharianto',
  },
  {
    icon: linkedin,
    label: '/in/ddharianto/',
    src: 'https://www.linkedin.com/in/ddharianto/',
  },
  {
    icon: instagram,
    label: '/ddharianto',
    src: 'https://www.instagram.com/ddharianto/',
  },
];
