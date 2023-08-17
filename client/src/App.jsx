import React from 'react';

import {
  Navbar,
  Hero,
  About,
  Projects,
  Portfolio,
  Skills,
  Contacts,
} from './components';

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default App;
