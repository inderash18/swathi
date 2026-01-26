import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#010001] text-white overflow-x-hidden designer-grid">
      {/* Noise Texture */}
      <div className="bg-noise"></div>

      {/* Decorative Orbs - Friendlier colors and placement */}
      <div className="orb top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#367D8A]/20 blur-[150px]"></div>
      <div className="orb top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#285F6B]/15 blur-[120px]"></div>
      <div className="orb bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-[#367D8A]/10 blur-[180px]"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
