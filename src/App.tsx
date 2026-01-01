import { lazy, Suspense, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import { RibbonDivider } from './components/RibbonDivider';
import Loader from './components/Loader';
import { APP_CONFIG } from './constants';

// Lazy load below-the-fold components for better initial load performance
const About = lazy(() => import('./components/About'));
const Events = lazy(() => import('./components/Events'));
const Schedule = lazy(() => import('./components/Schedule'));
const Guidelines = lazy(() => import('./components/Guidelines'));
const TravelGuide = lazy(() => import('./components/TravelGuide'));
const Contact = lazy(() => import('./components/Contact'));

// Simple loading component
const LoadingFallback = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="animate-pulse text-[var(--text-secondary)]">Loading...</div>
  </div>
);

function App() {
  // Set dark theme on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ErrorBoundary>
      <Loader />
      <div className='min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative'>
            {/* Hexagonal pattern background */}
            <div className='fixed inset-0 bg-pattern pointer-events-none z-0'></div>

            <div className='relative z-10'>
              <Header />
              <main>
                <Hero />
                <RibbonDivider />
                <Suspense fallback={<LoadingFallback />}>
                  <About />
                  <Events />
                  <Schedule />
                  <Guidelines />
                  <TravelGuide />
                  <Contact />
                </Suspense>
              </main>

              <footer className='bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] py-20 border-t border-[var(--border-color)]'>
                <div className='container mx-auto px-6 max-w-6xl'>
                  <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16'>
                    <div className='lg:col-span-2'>
                      <div className='h-10 lg:h-12 mb-4'>
                        <img
                          src='/IMG_20250815_2129361.png'
                          alt='AARAMBH 3.0 Logo'
                          className='h-full object-contain'
                          width={150}
                          height={48}
                          loading='lazy'
                        />
                      </div>
                      <p className='text-[var(--text-secondary)] text-base leading-relaxed max-w-md'>
                        Where innovation meets opportunity. Join us for two days of creativity, technology, and collaboration.
                      </p>
                    </div>

                    <div>
                      <h4 className='font-semibold mb-4 text-[var(--text-heading)] text-sm uppercase tracking-wider'>Navigate</h4>
                      <div className='space-y-3 text-sm'>
                        <a
                          href='#about'
                          className='block text-[var(--text-secondary)] hover:text-appleGreen-400 dark:hover:text-appleGreen-300 transition-colors'
                        >
                          About
                        </a>
                        <a
                          href='#events'
                          className='block text-[var(--text-secondary)] hover:text-appleGreen-400 dark:hover:text-appleGreen-300 transition-colors'
                        >
                          Events
                        </a>
                        <a
                          href='#schedule'
                          className='block text-[var(--text-secondary)] hover:text-appleGreen-400 dark:hover:text-appleGreen-300 transition-colors'
                        >
                          Schedule
                        </a>
                        <a
                          href='#travel-guide'
                          className='block text-[var(--text-secondary)] hover:text-appleGreen-400 dark:hover:text-appleGreen-300 transition-colors'
                        >
                          Travel Guide
                        </a>
                        <a
                          href='#contact'
                          className='block text-[var(--text-secondary)] hover:text-appleGreen-400 dark:hover:text-appleGreen-300 transition-colors'
                        >
                          Contact
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className='font-semibold mb-4 text-[var(--text-heading)] text-sm uppercase tracking-wider'>Organized by</h4>
                      <p className='text-[var(--text-secondary)] text-sm leading-relaxed'>
                        Innovation & Entrepreneurship<br />
                        Development Cell
                        <br /><br />
                        College of Engineering<br />
                        Karunagapally
                      </p>
                    </div>
                  </div>

                  {/* Logos Section */}
                  <div className='mb-12'>
                    <div className='flex flex-wrap justify-center items-center gap-8 lg:gap-12'>
                      <div className='h-16 lg:h-20 w-auto'>
                        <img
                          src='/IEDC_KSUM_Logo_Original_Full_White.png'
                          alt='IEDC KSUM Logo'
                          className='h-full w-auto object-contain'
                          width={200}
                          height={80}
                          loading='lazy'
                        />
                      </div>
                      <div className='h-16 lg:h-20 w-auto'>
                        <img
                          src='/iedc white-01.png'
                          alt='IEDC Logo'
                          className='h-full w-auto object-contain'
                          width={200}
                          height={80}
                          loading='lazy'
                        />
                      </div>
                    </div>
                  </div>

                  {/* Nodal Officers Section */}
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-[var(--text-muted)]'>
                      <span>© 2026 {APP_CONFIG.name}. All rights reserved.</span>
                      <span className='text-xs opacity-70'>Crafted with precision by Tech Team</span>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
    </ErrorBoundary>
  );
}

export default App;
