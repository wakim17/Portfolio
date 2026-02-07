import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

// Home Component containing all main sections
const Home = () => (
  <>
    <Hero />
    <Projects isHomePage={true} />
    <About isHomePage={true} />
    <Contact />
  </>
);

// All Projects Component
const AllProjectsPage = () => (
  <>
    <Projects isHomePage={false} />
    <div className="py-12 bg-dark"></div>
  </>
);

// Full About Component
const AboutPage = () => (
    <>
        <About isHomePage={false} />
        <Contact />
    </>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-slate-200">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
}

export default App;