import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ProjectDetail from './components/ProjectDetail';
// REMOVED: import Process from './components/Process'; 

const Home = () => (
  <>
    <Hero />
    {/* REMOVED: <Process /> - It's now inside the Hero! */}
    <Projects isHomePage={true} />
    <About isHomePage={true} />
    <Contact />
  </>
);

const AllProjectsPage = () => (
  <>
    <Projects isHomePage={false} />
    <div className="py-12 bg-dark"></div>
  </>
);

const AboutPage = () => (
    <>
        <About isHomePage={false} />
        <Contact />
    </>
);

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
      <div className="min-h-screen bg-slate-900 text-slate-200 relative overflow-hidden z-0">
        
        {/* BACKGROUND GLOWS */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
        </div>

        <ScrollToTop />
        <Header />
        
        <main className="relative z-10">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
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