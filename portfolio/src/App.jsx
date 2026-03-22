import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './sections/Hero';
import Philosophy from './sections/Philosophy';
import About from './sections/About';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import { CV_DATA } from './data/cvData';

function App() {
  return (
    <main className="relative bg-transparent min-h-screen selection:bg-brand-200/50 font-sans text-brand-800">
      <Background />
      <Navbar data={CV_DATA} />
      <Hero data={CV_DATA} />
      <Philosophy />
      <About data={CV_DATA} />
      <Projects data={CV_DATA} />
      <Certificates data={CV_DATA} />
      <Contact data={CV_DATA} />

      {/* Footer */}
      <footer className="py-8 border-t border-[#333] bg-[#121212] mt-auto text-center">
        <p className="text-[#a0a0a0] text-sm uppercase tracking-widest font-semibold">
          &copy; {new Date().getFullYear()} {CV_DATA.personal.name}. Engineered for Scale.
        </p>
      </footer>
    </main>
  );
}

export default App;
