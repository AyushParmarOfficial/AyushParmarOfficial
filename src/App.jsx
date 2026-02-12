import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-theme-background text-theme-text font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
