import React from 'react';

import {
  Navbar,
  Hero,
  Blur,
  About,
  Projects,
  Experiences,
  Contacts,
  Footer,
} from './components';

const App = () => {
  return (
    <div className="flex-col flex">
      <Navbar />
      <Hero />
      <Blur />
      <About />
      <Experiences />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
