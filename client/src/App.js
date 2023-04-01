import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
