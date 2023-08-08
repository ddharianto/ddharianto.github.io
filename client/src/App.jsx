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
    <div className="flex-col flex">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Experiences /> */}
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
