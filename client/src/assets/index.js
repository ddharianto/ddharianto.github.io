import earth from './images/earth.jpg';
import moon from './images/moon.jpg';
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
  react,
  redux,
  figma,
  materialui,
  rapidapi,
  reacttablev7,
  php,
  regex,
  mysql,
  bootstrap,
  tailwind,
  vite,
} from './icons';

export { moon };

// export const planetary_bg = [earth, jupiter, neptune, saturn, mars, uranus];

export const navbar = [
  { title: 'about.', href: '#about' },
  { title: 'project.', href: '#project' },
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
    stack: [react, redux, rapidapi],
    github: 'https://github.com/ddharianto/muzyk-app',
    demo: 'https://muzyk.netlify.app/',
  },
  {
    name: 'React Table',
    image: react_table,
    bg: neptune,
    bg_deg: 'rotate-[30deg]',
    desc: `
          An example of a full functioning table using React-Table v7 and styled with Material UI v5
          `,
    stack: [react, materialui, reacttablev7],
    github: 'https://github.com/ddharianto/react-table',
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
    github: 'https://github.com/ddharianto/login-form-with-regex',
  },
];

export const portfolio = [
  {
    name: 'Portfolio v1',
    image: portfolio_v1,
    bg: earth,
    bg_deg: 'rotate-[25deg]',
    desc: `
          First iteraion of my portfolio design using CRA with React and Material UI as CSS styling framework
          `,
    stack: [react, figma, materialui],
    github: 'https://github.com/ddharianto/ddharianto.github.io/',
    demo: 'https://ddharianto.github.io/',
  },
  {
    name: 'Portfolio v2 (Current)',
    image: portfolio_v2,
    bg: mars,
    bg_deg: 'rotate-[25deg]',
    desc: `
          Second iteraion of my portfolio design using Vite with React and Tailwind as CSS styling framework
          `,
    stack: [react, vite, tailwind],
    github: 'https://github.com/ddharianto/ddharianto.github.io/',
    demo: 'https://ddharianto.github.io/',
  },
];

export const contacts = [
  {
    //   avatar: github,
    name: 'github',
    label: '/ddharianto',
    src: 'https://github.com/ddharianto',
  },
  {
    //   avatar: linkedin,
    name: 'linkedin',
    label: '/in/ddharianto/',
    src: 'https://www.linkedin.com/in/ddharianto/',
  },
  {
    //   avatar: gmail,
    name: 'email',
    label: 'ddharianto11@gmail.com',
    src: 'mailto:ddharianto11@gmail.com',
  },
  {
    //   avatar: phone,
    name: 'phone',
    label: '(+62) 8211 4239 288',
    src: 'tel:+6282114239288',
  },
];
