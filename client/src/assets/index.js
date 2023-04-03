import javascript from './img/javascript.svg';
import nodejs from './img/nodejs.svg';
import react from './img/react.svg';
import html5 from './img/html5.svg';
import css3 from './img/css3.svg';
import materialui from './img/materialui.svg';
import mongodb from './img/mongodb.svg';
import php from './img/php.svg';
import vscode from './img/vscode.svg';
import express from './img/express.svg';
import avatar from './img/avatar.jpg';
import react_table from './img/react_table_exp.png';
import login_regex from './img/login_regex_exp.png';

export const tech_stack = [
  {
    name: 'Javascript',
    icon: javascript,
  },
  {
    name: 'Node.js',
    icon: nodejs,
  },
  {
    name: 'React',
    icon: react,
  },
  {
    name: 'HTML 5',
    icon: html5,
  },
  {
    name: 'CSS 3',
    icon: css3,
  },
  {
    name: 'Material UI',
    icon: materialui,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'VS Code',
    icon: vscode,
  },
  {
    name: 'Express',
    icon: express,
  },
];

export const about_me = {
  desc: `
        I'm a web developer and mainly work with Javascript. 
        Able to work as a front-end and back-end developer. 
        I have experience with React, React Hooks, Material UI as a front-end and experience with Nodejs, RESTful API as a back-end developer. 
        I'm a fast learner and very adaptable to a new environtment and new technologies. Looking forward to working with you!
        `,
  avatar: avatar,
};

export const projects = [
  {
    name: 'React-Table with Material UI',
    image: react_table,
    desc: `This is an example how to create a table using React-Table v7 and styled with Material UI v5`,
    tags: ['react', 'react-table-v7', 'material-ui-v5'],
    src: 'https://github.com/ddharianto/react-table',
    demo: 'https://ddharianto.github.io/react-table/',
  },
  {
    name: 'Login Form with Regex',
    image: login_regex,
    desc: `
          Displays basic login, registration, change password, and logout forms in the PHP programming language. 
          The login, registration and change password forms use regex so that users can submit entries that are adjusted by the system.
          `,
    tags: ['php', 'regex', 'mysql', 'bootstrap'],
    src: 'https://github.com/ddharianto/login-form-with-regex',
    demo: '',
  },
];
