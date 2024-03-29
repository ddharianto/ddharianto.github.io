import React, { useState, useEffect } from 'react';

import {
  Navbar,
  Hero,
  About,
  Projects,
  Portfolio,
  Skills,
  Contacts,
  Loader,
} from './components';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) return <Loader />;

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
