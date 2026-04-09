import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo } from './data/portfolio';

function App() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Mahendra_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <AnimatePresence mode="wait">
      <div className="bg-black text-white overflow-hidden">
        {/* Custom cursor */}
        <CustomCursor />

        {/* Navigation */}
        <Navigation onDownloadResume={handleDownloadResume} onViewResume={handleViewResume} />

        {/* Main content */}
        <motion.main
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <Hero onDownloadResume={handleDownloadResume} onViewResume={handleViewResume} />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Experience Section */}
          <Experience />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <Contact />

          {/* Footer */}
          <Footer />
        </motion.main>

        {/* Scroll to top button */}
        <ScrollToTopButton />
      </div>
    </AnimatePresence>
  );
}

// Custom cursor component
const CustomCursor = () => {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <>
          {/* Main cursor dot */}
          <motion.div
            className="fixed w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-50"
            animate={{ x: cursorPos.x - 6, y: cursorPos.y - 6 }}
            transition={{ type: 'spring', stiffness: 1000, damping: 60 }}
          />
          {/* Cursor ring */}
          <motion.div
            className="fixed w-10 h-10 border-2 border-blue-400 rounded-full pointer-events-none z-50 mix-blend-screen"
            animate={{ x: cursorPos.x - 20, y: cursorPos.y - 20 }}
            transition={{ type: 'spring', stiffness: 500, damping: 80 }}
          />
        </>
      )}
    </>
  );
};

// Scroll to top button
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 flex items-center justify-center text-2xl text-white shadow-lg hover:shadow-2xl z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default App;
