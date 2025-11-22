import { memo } from 'react';
import { Lightning, Users, Trophy, Rocket } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { transitions } from '../lib/motion';

const About = memo(() => {
  const prefersReducedMotion = useReducedMotion();

  const features = [
    {
      icon: <Lightning className='w-8 h-8' color="currentColor" />,
      title: 'Innovation Hub',
      description: 'Showcase your innovative ideas and creative solutions',
      color: 'from-appleGreen-400 to-yellowGreen-400',
    },
    {
      icon: <Users className='w-8 h-8' color="currentColor" />,
      title: 'Networking',
      description: 'Connect with like-minded individuals, mentors, and industry experts',
      color: 'from-asparagus-400 to-seaGreen-400',
    },
    {
      icon: <Trophy className='w-8 h-8' color="currentColor" />,
      title: 'Competitions',
      description: 'Participate in exciting competitions and win amazing prizes',
      color: 'from-yellowGreen-400 to-appleGreen-400',
    },
    {
      icon: <Rocket className='w-8 h-8' color="currentColor" />,
      title: 'Learning',
      description: 'Attend workshops and talks to enhance your technical skills',
      color: 'from-seaGreen-400 to-asparagus-400',
    },
  ];

  return (
    <section id='about' className='py-12 lg:py-24 relative overflow-hidden z-10'>
      <div className='container mx-auto px-4 lg:px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-6xl font-bold text-[var(--text-heading)] mb-6 font-heading'>
            About <span className='gradient-text'>AARAMBH 3.0</span>
          </h2>
          <p className='text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed'>
            AARAMBH 3.0 is the flagship tech fest organized by IEDC at College of Engineering
            Karunagapally. It's a celebration of innovation, technology, and creativity where
            brilliant minds come together to learn, compete, and create the future.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='bg-[var(--bg-card)] p-6 lg:p-8 rounded-xl border border-[var(--border-color)] hover-elevate shadow-lg group cursor-pointer text-center lg:text-left mx-4 lg:mx-0'
              whileHover={prefersReducedMotion ? {} : { y: -8 }}
              transition={transitions.base}
            >
              <motion.div
                className='inline-block mb-4 text-appleGreen-400 dark:text-appleGreen-300'
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: 1.1,
                        rotate: 5,
                      }
                }
                transition={transitions.fast}
              >
                {feature.icon}
              </motion.div>
              <h3 className='text-xl font-semibold text-[var(--text-heading)] mb-3 group-hover:text-appleGreen-400 dark:group-hover:text-appleGreen-300 transition-colors'>
                {feature.title}
              </h3>
              <p className='text-[var(--text-secondary)] leading-relaxed'>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className='bg-gradient-to-r from-appleGreen-400/10 to-asparagus-400/10 p-8 rounded-2xl border border-appleGreen-400/20 dark:border-appleGreen-300/20 shadow-xl'>
          <div className='grid lg:grid-cols-3 gap-8 text-center'>
            <motion.div
              className='group cursor-default'
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              transition={transitions.base}
            >
              <h3 className='text-4xl lg:text-5xl font-bold gradient-text mb-2'>1000+</h3>
              <p className='text-[var(--text-secondary)]'>Expected Participants</p>
            </motion.div>
            <motion.div
              className='group cursor-default'
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              transition={transitions.base}
            >
              <h3 className='text-4xl lg:text-5xl font-bold gradient-text mb-2'>10+</h3>
              <p className='text-[var(--text-secondary)]'>Exciting Events</p>
            </motion.div>
            <motion.div
              className='group cursor-default'
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              transition={transitions.base}
            >
              <h3 className='text-4xl lg:text-5xl font-bold gradient-text mb-2'>₹80,000+</h3>
              <p className='text-[var(--text-secondary)]'>Prize Money</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
