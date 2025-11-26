import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin } from '@phosphor-icons/react';
import { variants, transitions } from '../lib/motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [showModal, setShowModal] = useState(false);
  const [showSponsorModal, setShowSponsorModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('2026-01-04T09:00:00');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Stagger animation for hero elements
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
    <section id='home' className='min-h-screen flex items-center pt-24 lg:pt-20 pb-8 lg:pb-0 relative overflow-hidden z-10'>
      {/* Animated gradient background */}
      <div className='absolute inset-0 opacity-20 dark:opacity-10'>
        <motion.div
          className='absolute top-0 left-0 w-96 h-96 bg-appleGreen-400 rounded-full mix-blend-multiply filter blur-3xl'
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-0 right-0 w-96 h-96 bg-asparagus-400 rounded-full mix-blend-multiply filter blur-3xl'
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, -50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.15, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellowGreen-400 rounded-full mix-blend-multiply filter blur-3xl'
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, 30, 0],
                  y: [0, -40, 0],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-20 flex items-center lg:block min-h-[calc(100vh-14rem)] lg:min-h-0'>
        <motion.div
          className='flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center lg:items-center w-full'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Event Banner */}
          <motion.div
            className='text-center lg:text-left order-2 lg:order-1 hidden lg:block'
            variants={variants.fadeUp}
          >
            <div className='w-full max-w-lg mx-auto lg:mx-0 mb-8'>
              <motion.img
                src='/Picsart_25-08-15_17-59-36-702.png'
                alt='AARAMBH 3.0 Event Banner'
                className='w-full h-full object-contain'
                width={512}
                height={512}
                loading='eager'
                fetchPriority='high'
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={transitions.base}
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div className='order-1 lg:order-2 w-full' variants={variants.fadeUp}>
            {/* Logo - Desktop only */}
            <motion.div
              className='hidden lg:block lg:w-96 mx-auto lg:mx-0 mb-8'
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              transition={transitions.calm}
            >
              <img
                src='/IMG_20250815_212936.png'
                alt='AARAMBH 3.0 Logo'
                className='w-full h-full object-contain drop-shadow-2xl'
                width={384}
                height={384}
                loading='eager'
                fetchPriority='high'
              />
            </motion.div>

            {/* Title - Mobile only */}
            <motion.div className='lg:hidden mb-3 flex justify-center -mt-16' variants={variants.fadeUp}>
              <img
                src='/IMG_20250815_212936.png'
                alt='AARAMBH 3.0 Logo'
                className='w-full max-w-md object-contain'
                width={448}
                height={448}
                loading='eager'
                fetchPriority='high'
              />
            </motion.div>

            {/* Date - Mobile only */}
            <motion.div className='lg:hidden mb-4 flex items-center justify-center gap-2' variants={variants.fadeUp}>
              <p className='text-xl lg:text-2xl font-semibold text-appleGreen-400'>
                January 4-5, 2026
              </p>
            </motion.div>

            {/* New Logo - Mobile only */}
            <motion.div className='lg:hidden mb-6 flex justify-center' variants={variants.fadeUp}>
              <img
                src='/Picsart_25-08-15_17-59-36-702.png'
                alt='AARAMBH Logo'
                className='w-32 h-auto object-contain'
                width={128}
                height={90}
                loading='eager'
                fetchPriority='high'
              />
            </motion.div>

            {/* Organizer Info - Desktop only */}
            <motion.div className='mb-5 lg:mb-6 space-y-0.5 lg:space-y-2 text-center lg:text-left hidden lg:block' variants={variants.fadeUp}>
              <p className='text-2xl text-asparagus-400 dark:text-asparagus-300 font-semibold'>
                IEDC
              </p>
              <p className='text-lg text-[var(--text-secondary)]'>
                College of Engineering Karunagapally
              </p>
            </motion.div>

            {/* Date and Location - Desktop only */}
            <motion.div
              className='hidden lg:flex flex-wrap items-center justify-start gap-4 lg:gap-6 mb-5 lg:mb-8 text-[var(--text-secondary)]'
              variants={variants.fadeUp}
            >
              <motion.div
                className='flex items-center gap-2 group cursor-pointer'
                whileHover={prefersReducedMotion ? {} : { x: 4 }}
                transition={transitions.fast}
              >
                <Calendar
                  size={20}
                  color="currentColor"
                  className='group-hover:text-appleGreen-400 transition-colors'
                />
                <span className='group-hover:text-[var(--text-primary)] transition-colors'>
                  January 4-5, 2026
                </span>
              </motion.div>
              <motion.div
                className='flex items-center gap-2 group cursor-pointer'
                whileHover={prefersReducedMotion ? {} : { x: 4 }}
                transition={transitions.fast}
              >
                <MapPin
                  size={20}
                  color="currentColor"
                  className='group-hover:text-asparagus-400 transition-colors'
                />
                <span className='group-hover:text-[var(--text-primary)] transition-colors'>
                  CEK Campus
                </span>
              </motion.div>
            </motion.div>

            {/* CTA Button - Mobile only (moved before countdown) */}
            <motion.div className='lg:hidden mb-6 flex justify-center' variants={variants.fadeUp}>
              <motion.button
                id='register'
                onClick={() => {
                  const element = document.getElementById('events');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className='btn-primary active-press w-full max-w-xs py-4 text-lg font-bold'
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                transition={transitions.fast}
                aria-label='Register for AARAMBH 3.0 event'
              >
              Register Now
              </motion.button>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              className='bg-[var(--bg-card)] p-4 lg:p-6 rounded-xl mb-6 lg:mb-8 border border-[var(--border-color)] shadow-lg hover-elevate'
              variants={variants.scaleIn}
              role='timer'
              aria-label='Countdown to AARAMBH 3.0'
            >
              <h2 className='text-lg lg:text-xl font-semibold text-[var(--text-heading)] mb-3 lg:mb-4 text-center lg:block hidden'>
                Event Starts In
              </h2>
              <div className='grid grid-cols-4 gap-2 lg:gap-4'>
                {Object.entries(timeLeft).map(([unit, value], index) => (
                  <motion.div
                    key={unit}
                    className='text-center group'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      ...transitions.base,
                    }}
                  >
                    <motion.div
                      className='bg-gradient-to-br from-appleGreen-400 to-asparagus-400 text-white dark:text-black text-2xl lg:text-3xl font-bold py-3 px-2 rounded-lg mb-2 shadow-lg'
                      whileHover={prefersReducedMotion ? {} : { scale: 1.1, y: -4 }}
                      transition={transitions.fast}
                    >
                      {value.toString().padStart(2, '0')}
                    </motion.div>
                    <p className='text-[var(--text-secondary)] text-xs lg:text-sm capitalize uppercase font-semibold'>{unit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stall Registration Button - Mobile */}
            <motion.div className='lg:hidden mb-6 flex justify-center' variants={variants.fadeUp}>
              <motion.button
                onClick={() => setShowModal(true)}
                className='btn-secondary active-press w-full max-w-xs py-4 text-lg font-bold text-center flex items-center justify-center gap-2'
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                transition={transitions.fast}
              >
                <span>Stalls & Sponsors</span>
                <span className='text-sm'>→</span>
              </motion.button>
            </motion.div>

            {/* CTA Buttons - Desktop only */}
            <motion.div className='hidden lg:flex flex-col lg:flex-row flex-wrap justify-start gap-3 lg:gap-4' variants={variants.fadeUp}>
              <motion.button
                id='register'
                onClick={() => {
                  const element = document.getElementById('events');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className='btn-primary active-press w-full lg:w-auto'
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                transition={transitions.fast}
              >
                Register Now
              </motion.button>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('schedule');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className='btn-secondary active-press w-full lg:w-auto'
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                transition={transitions.fast}
                aria-label='View event schedule'
              >
                View Schedule
              </motion.button>
              <motion.button
                onClick={() => setShowModal(true)}
                className='btn-secondary active-press w-full lg:w-auto flex items-center gap-2'
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                transition={transitions.fast}
              >
                <span>Stalls & Sponsors</span>
                <span className='text-sm'>→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Registration Choice Modal */}
      <AnimatePresence>
        {showModal && (
          <div 
            className='absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4' 
            style={{ zIndex: 9999 }}
            onClick={() => setShowModal(false)}
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-title'
          >
            <motion.div
              className='bg-[var(--bg-card)] rounded-2xl p-8 max-w-md w-full border-2 border-[var(--border-color)] shadow-2xl relative'
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className='text-2xl font-bold text-[var(--text-heading)] mb-6 text-center'>
                Choose Registration Type
              </h3>
              <div className='space-y-4'>
                <a
                  href='https://forms.gle/yGKtFpTKz4Ss4kGF7'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-primary w-full py-4 text-center block'
                  onClick={() => setShowModal(false)}
                >
                  Register for Stalls
                </a>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setTimeout(() => setShowSponsorModal(true), 200);
                  }}
                  className='btn-secondary w-full py-4'
                >
                  Register for Sponsorship
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className='w-full py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors'
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sponsor Contact Modal */}
      <AnimatePresence>
        {showSponsorModal && (
          <div 
            className='absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4'
            style={{ zIndex: 9999 }}
            onClick={() => setShowSponsorModal(false)}
          >
            <motion.div
              className='bg-[var(--bg-card)] rounded-2xl p-8 max-w-md w-full border-2 border-[var(--border-color)] shadow-2xl relative'
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className='text-2xl font-bold text-[var(--text-heading)] mb-4 text-center'>
                Contact for Sponsorship
              </h3>
              <p className='text-[var(--text-secondary)] mb-6 text-center'>
                Please contact our team for sponsoring the event
              </p>
              <div className='space-y-4 mb-6'>
                <a
                  href='tel:+916238765752'
                  className='bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)] hover:border-appleGreen-400 transition-all block group'
                >
                  <p className='font-semibold text-[var(--text-heading)] group-hover:text-appleGreen-400 transition-colors'>
                    Anandhu Babu
                  </p>
                  <p className='text-appleGreen-400 text-lg'>+91 6238765752</p>
                </a>
                <a
                  href='tel:+919539218455'
                  className='bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)] hover:border-appleGreen-400 transition-all block group'
                >
                  <p className='font-semibold text-[var(--text-heading)] group-hover:text-appleGreen-400 transition-colors'>
                    Mohammed Shammas A
                  </p>
                  <p className='text-appleGreen-400 text-lg'>+91 9539218455</p>
                </a>
              </div>
              <button
                onClick={() => setShowSponsorModal(false)}
                className='btn-secondary w-full py-3'
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
    </>
  );
};

export default Hero;
