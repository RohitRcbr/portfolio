import 'swiper/css';
import Header from './component/Header';
import About from './component/About';
import Resume from './component/Resume';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  return (
    <div className='page'>
      <div className='page-content'>
        <Header />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;