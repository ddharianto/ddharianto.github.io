import react from './react.svg';
import hero_bg from './starry-night-sky.jpg';

export { react, hero_bg };

export const navbar = [
  { title: 'about.', href: '#about' },
  { title: 'project.', href: '#project' },
  { title: 'experience.', href: '#experience' },
  { title: 'contact.', href: '#contact' },
  { title: 'resume.', href: '/resume_ddharianto.pdf', target: '_blank' },
];

export const cv = {
  name: 'CV - Dede Harianto',
  // file: cv_pdf,
};

export const tech_stack = [
  {
    name: 'Javascript',
    //   icon: javascript,
  },
  {
    name: 'Node.js',
    //   icon: nodejs,
  },
  {
    name: 'Express',
    //   icon: express,
  },
  {
    name: 'React',
    //   icon: react,
  },
  {
    name: 'HTML 5',
    //   icon: html5,
  },
  {
    name: 'CSS 3',
    //   icon: css3,
  },
  {
    name: 'Bootstrap',
    //   icon: bootstrap,
  },
  {
    name: 'Material UI',
    //   icon: materialui,
  },
  {
    name: 'MongoDB',
    //   icon: mongodb,
  },
  {
    name: 'MySQL',
    //   icon: mysql,
  },
  {
    name: 'PHP',
    //   icon: php,
  },
  {
    name: 'Python',
    //   icon: python,
  },
  {
    name: 'VS Code',
    //   icon: vscode,
  },
];

export const about_me = {
  desc: `
          I'm a web developer and mainly work with Javascript. 
          Able to work as a front-end and back-end developer. 
          I have experience with React, React Hooks, Material UI as a front-end and experience with Nodejs, RESTful API as a back-end developer. 
          I'm a fast learner and very adaptable to a new environtment and new technologies. Looking forward to working with you!
          `,
  // avatar: avatar,
};

export const projects = [
  {
    name: 'Muzyk App',
    //   image: muzykapp,
    desc: `Music App with fully functional music player and updated based on Shazam Api`,
    tags: ['react', 'tailwind', 'redux', 'google OAuth', 'rapid-api'],
    src: 'https://github.com/ddharianto/muzyk-app',
    demo: 'https://muzyk.netlify.app/',
  },
  {
    name: 'Portfolio',
    //   image: portfolio,
    desc: `My personal portfolio designed in Figma and React with Material Ui`,
    tags: ['react', 'figma', 'material-ui-v5', 'css-3'],
    src: 'https://github.com/ddharianto/ddharianto.github.io/',
    demo: 'https://ddharianto.github.io/',
  },
  {
    name: 'React-Table with Material UI',
    //   image: react_table,
    desc: `This is an example how to create a table using React-Table v7 and styled with Material UI v5`,
    tags: ['react', 'react-table-v7', 'material-ui-v5'],
    src: 'https://github.com/ddharianto/react-table',
    demo: 'https://ddharianto.github.io/react-table/',
  },
  {
    name: 'Login Form with Regex',
    //   image: login_regex,
    desc: `
            Displays basic login, registration, change password, and logout forms in the PHP programming language. 
            The login, registration and change password forms use regex so that users can submit entries that are adjusted by the system.
            `,
    tags: ['php', 'regex', 'mysql', 'bootstrap'],
    src: 'https://github.com/ddharianto/login-form-with-regex',
    demo: '',
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
