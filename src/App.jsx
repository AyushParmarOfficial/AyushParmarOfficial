import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';

// Lazy load non-critical sections
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Experience = lazy(() => import('./sections/Experience'));
const Resume = lazy(() => import('./sections/Resume'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-theme-background text-theme-text font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="w-10 h-10 border-4 border-theme-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <About />
          <Skills />
          <Experience />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
