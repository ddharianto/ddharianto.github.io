import React from 'react';

import {
  Navbar,
  Hero,
  About,
  Projects,
  Experiences,
  Contacts,
  Footer,
} from './components';

const App = () => {
  return (
    <div className="container bg-primary text-white">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
