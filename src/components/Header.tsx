import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { transitions } from '../lib/motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'events', 'schedule', 'guidelines', 'travel-guide', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Close menu first for mobile
    setIsMenuOpen(false);
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'travel-guide', label: 'Travel Guide' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[var(--bg-primary)]/30 backdrop-blur-xl py-2'
          : 'bg-transparent'
      }`}
    >
      <nav className={`container mx-auto px-6 py-4 transition-all duration-500 ${
        isScrolled ? 'bg-[var(--bg-card)]/40 backdrop-blur-md rounded-2xl shadow-lg shadow-appleGreen-400/5' : ''
      }`} aria-label='Main navigation'>
        <div className='flex items-center justify-between'>
          <div className='h-8 cursor-pointer lg:block hidden' onClick={() => scrollToSection('home')}>
            <img
              src='/Picsart_25-08-15_17-59-36-702.png'
              alt='AARAMBH Logo'
              className='h-full object-contain hover:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100'
              width={120}
              height={32}
              loading='eager'
            />
          </div>

          <div className='h-8 cursor-pointer lg:hidden absolute left-1/2 -translate-x-1/2' onClick={() => scrollToSection('home')}>
            <img
              src='/Picsart_25-08-15_17-59-36-702.png'
              alt='AARAMBH Logo'
              className='h-full object-contain hover:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100'
              width={120}
              height={32}
              loading='eager'
            />
          </div>

          <div className='hidden lg:flex items-center space-x-8'>
            {navItems.map(item => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 px-4 font-medium transition-all duration-300 group rounded-lg ${
                  activeSection === item.id
                    ? 'text-[var(--accent-primary)]'
                    : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'
                }`}
                whileHover={{
                  backgroundColor: 'rgba(159, 200, 102, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
                transition={transitions.fast}
              >
                {item.label}
                <motion.span
                  className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-appleGreen-400 to-asparagus-400'
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={transitions.fast}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.button>
            ))}

            <motion.button
              onClick={() => scrollToSection('events')}
              className='btn-primary'
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              transition={transitions.fast}
              aria-label='Register for AARAMBH 3.0'
            >
              Register Now
            </motion.button>
          </div>

          <div className='lg:hidden flex items-center gap-4 ml-auto'>
            <motion.button
              className='text-[var(--text-primary)]'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} color="currentColor" /> : <List size={24} color="currentColor" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className='lg:hidden mt-4 bg-[var(--bg-card)] rounded-xl p-6 shadow-xl border border-[var(--border-color)] mx-2'
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={transitions.base}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection(item.id);
                  }}
                  className={`block w-full text-center py-4 px-6 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-appleGreen-400/20 to-asparagus-400/20 text-[var(--accent-primary)] font-semibold'
                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    ...transitions.fast,
                  }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollToSection('events');
                }}
                className='w-full mt-4 btn-primary text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.05, ...transitions.fast }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                aria-label='Register for AARAMBH 3.0'
              >
                Register Now
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
