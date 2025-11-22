import { useState } from 'react';
import { Bus, Train, MapPin, Info, Clock, Warning, Sparkle, CaretRight } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const TravelGuide = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const [selectedMode, setSelectedMode] = useState<'bus' | 'train'>('bus');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const travelModes = [
    { 
      id: 'bus' as const, 
      label: 'By Bus', 
      icon: <Bus size={24} weight="duotone" />,
      gradient: 'from-appleGreen-400 to-yellowGreen-400'
    },
    { 
      id: 'train' as const, 
      label: 'By Train', 
      icon: <Train size={24} weight="duotone" />,
      gradient: 'from-asparagus-400 to-appleGreen-500'
    },
  ];

  return (
    <section id="travel-guide" className='py-12 lg:py-24 bg-[var(--bg-primary)]'>
      <div className='container mx-auto px-4'>
        {/* Title Section */}
        <div
          ref={titleRef}
          className={`text-center mb-16 mb-12 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className='text-4xl lg:text-6xl font-bold font-heading mb-6'>
            <span className='gradient-text'>Travel Guide</span>
          </h2>
          <div className='max-w-3xl mx-auto space-y-3'>
            <p className='text-xl text-[var(--text-secondary)]'>
              Plan your journey to AARAMBH 3.0 with our comprehensive travel guide
            </p>
            <div className='flex items-center justify-center gap-6 text-[var(--text-secondary)] flex-wrap'>
              <div className='flex items-center gap-2 bg-[var(--bg-card)] px-4 py-2 rounded-full border border-[var(--border-color)]'>
                <MapPin size={20} className='text-appleGreen-400' weight="duotone" />
                <span className='text-sm font-medium'>College of Engineering Karunagappally</span>
              </div>
              <div className='flex items-center gap-2 bg-[var(--bg-card)] px-4 py-2 rounded-full border border-[var(--border-color)]'>
                <Clock size={20} className='text-appleGreen-400' weight="duotone" />
                <span className='text-sm font-medium'>January 4 & 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mode Selection Buttons */}
        <div
          ref={contentRef}
          className={`flex justify-center gap-4 gap-3 mb-12 mb-8 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {travelModes.map((mode, index) => (
            <motion.button
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex items-center gap-3 gap-2 px-8 px-6 py-4 py-3.5 rounded-xl font-semibold transition-all duration-300 overflow-hidden min-w-[44px] min-h-[44px] ${
                selectedMode === mode.id
                  ? 'text-white shadow-lg shadow-appleGreen-400/30'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-2 border-[var(--border-color)] hover:border-appleGreen-400'
              }`}
            >
              {selectedMode === mode.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 bg-gradient-to-r ${mode.gradient}`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className='relative z-10 flex items-center gap-3'>
                {mode.icon}
                <span className=''>{mode.label}</span>
              </span>
              {selectedMode === mode.id && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className='relative z-10'
                >
                  <Sparkle size={16} weight="fill" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {selectedMode === 'bus' && (
            <motion.div
              key="bus"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className='space-y-8'
            >
              {/* Bus intro */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className='bg-gradient-to-r from-appleGreen-400/10 via-yellowGreen-400/10 to-asparagus-400/10 p-6 rounded-xl border-2 border-appleGreen-400/20 shadow-lg'
              >
                <p className='text-[var(--text-secondary)] leading-relaxed flex items-start gap-3'>
                  <Bus size={28} className='text-appleGreen-400 flex-shrink-0 mt-0.5' weight="duotone" />
                  <span>
                    You can reach CEK conveniently from <span className='text-appleGreen-400 font-semibold'>Karunagappally</span> or{' '}
                    <span className='text-appleGreen-400 font-semibold'>Bharanikkavu</span> by choosing one of the following routes.
                  </span>
                </p>
              </motion.div>

              {/* From Karunagappally */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onHoverStart={() => setHoveredCard('karunagappally')}
                onHoverEnd={() => setHoveredCard(null)}
                className={`bg-[var(--bg-card)] p-8 p-5 rounded-2xl border-2 transition-all duration-300 shadow-xl ${
                  hoveredCard === 'karunagappally' 
                    ? 'border-appleGreen-400/50 shadow-2xl shadow-appleGreen-400/20' 
                    : 'border-[var(--border-color)]'
                }`}
              >
                <h3 className='text-2xl font-bold mb-6 flex items-center gap-3'>
                  <div className='p-2 bg-gradient-to-br from-appleGreen-400 to-yellowGreen-400 rounded-lg'>
                    <MapPin size={24} className='text-white' weight="duotone" />
                  </div>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-appleGreen-400 to-yellowGreen-400'>
                    From Karunagappally
                  </span>
                </h3>

                {/* Route cards for Karunagappally */}
                <div className='space-y-4'>
                  {/* Route 1 */}
                  <div className='p-5 bg-gradient-to-r from-appleGreen-400/5 to-transparent rounded-xl border-l-4 border-appleGreen-400'>
                    <div className='flex items-start gap-3 mb-3'>
                      <div className='bg-gradient-to-br from-appleGreen-400 to-yellowGreen-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md'>
                        1
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-base font-semibold text-[var(--text-heading)] mb-1'>
                          Via Driver Junction{' '}
                          <span className='inline-flex items-center gap-1 text-xs font-normal text-appleGreen-400 bg-appleGreen-400/10 px-2 py-0.5 rounded-full'>
                            <Sparkle size={12} weight="fill" /> Recommended
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className='ml-10 space-y-2.5'>
                      <div className='flex items-center gap-3 text-sm text-[var(--text-secondary)]'>
                        <CaretRight size={16} className='text-appleGreen-400' weight="bold" />
                        <span><strong>Karunagappally → Driver Junction:</strong> 2.7 km (10 min)</span>
                      </div>
                      <div className='flex items-center gap-3 text-sm text-[var(--text-secondary)]'>
                        <CaretRight size={16} className='text-appleGreen-400' weight="bold" />
                        <span><strong>Driver Junction → College:</strong> 1.5 km (Auto: 5 min | Walk: 15 min)</span>
                      </div>
                    </div>
                  </div>

                  {/* Route 2 */}
                  <div className='p-5 bg-gradient-to-r from-yellow-400/5 to-transparent rounded-xl border-l-4 border-yellow-400'>
                    <div className='flex items-start gap-3 mb-3'>
                      <div className='bg-gradient-to-br from-yellow-400 to-asparagus-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md'>
                        2
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-base font-semibold text-[var(--text-heading)] mb-1'>
                          Via Veluthamanal{' '}
                          <span className='inline-flex items-center gap-1 text-xs font-normal text-yellow-600 dark:text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full'>
                            <Warning size={12} weight="fill" /> Limited Buses
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className='ml-10 space-y-2.5'>
                      <div className='flex items-center gap-3 text-sm text-[var(--text-secondary)]'>
                        <CaretRight size={16} className='text-yellow-500' weight="bold" />
                        <span><strong>Karunagappally → Veluthamanal:</strong> 3.5 km (15 min)</span>
                      </div>
                      <div className='flex items-center gap-3 text-sm text-[var(--text-secondary)]'>
                        <CaretRight size={16} className='text-yellow-500' weight="bold" />
                        <span><strong>Veluthamanal → College:</strong> 1 km (Walk: 5 min)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* From Bharanikkavu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onHoverStart={() => setHoveredCard('bharanikkavu')}
                onHoverEnd={() => setHoveredCard(null)}
                className={`bg-[var(--bg-card)] p-8 p-5 rounded-2xl border-2 transition-all duration-300 shadow-xl ${
                  hoveredCard === 'bharanikkavu' 
                    ? 'border-asparagus-400/50 shadow-2xl shadow-asparagus-400/20' 
                    : 'border-[var(--border-color)]'
                }`}
              >
                <h3 className='text-2xl font-bold mb-6 flex items-center gap-3'>
                  <div className='p-2 bg-gradient-to-br from-asparagus-400 to-appleGreen-400 rounded-lg'>
                    <MapPin size={24} className='text-white' weight="duotone" />
                  </div>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-asparagus-400 to-appleGreen-400'>
                    From Bharanikkavu
                  </span>
                </h3>

                {/* Route cards for Bharanikkavu */}
                <div className='space-y-4'>
                  {/* Route 1 */}
                  <div className='p-5 bg-gradient-to-r from-appleGreen-400/5 to-transparent rounded-xl border-l-4 border-appleGreen-400'>
                    <div className='flex items-start gap-3 mb-3'>
                      <div className='bg-gradient-to-br from-appleGreen-400 to-yellowGreen-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md'>
                        1
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-base font-semibold text-[var(--text-heading)] mb-1'>
                          Via Driver Junction{' '}
                          <span className='inline-flex items-center gap-1 text-xs font-normal text-appleGreen-400 bg-appleGreen-400/10 px-2 py-0.5 rounded-full'>
                            <Sparkle size={12} weight="fill" /> Most Reliable
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className='ml-10 space-y-2.5'>
                      <div className='flex items-center gap-3 text-sm text-[var(--text-secondary)]'>
                        <CaretRight size={16} className='text-appleGreen-400' weight="bold" />
                        <span><strong>Bharanikkavu → Driver Junction:</strong> 14 km (40 min)</span>
                      </div>
                      <div className='flex items-center gap-3 text-sm text-[var(--text-secondary)]'>
                        <CaretRight size={16} className='text-appleGreen-400' weight="bold" />
                        <span><strong>Driver Junction → College:</strong> 1.5 km (Auto: 5 min | Walk: 15 min)</span>
                      </div>
                    </div>
                  </div>

                  {/* Route 2 */}
                  <div className='p-5 bg-gradient-to-r from-yellow-400/5 to-transparent rounded-xl border-l-4 border-yellow-400'>
                    <div className='flex items-start gap-3 mb-3'>
                      <div className='bg-gradient-to-br from-yellow-400 to-asparagus-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md'>
                        2
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-base font-semibold text-[var(--text-heading)] mb-1'>
                          Via Veluthamanal{' '}
                          <span className='inline-flex items-center gap-1 text-xs font-normal text-yellow-600 dark:text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full'>
                            <Warning size={12} weight="fill" /> Plan Ahead
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className='ml-10 space-y-2.5'>
                      <div className='flex items-center gap-3 text-sm text-[var(--text-secondary)]'>
                        <CaretRight size={16} className='text-yellow-500' weight="bold" />
                        <span><strong>Bharanikkavu → Veluthamanal:</strong> 13 km (45 min)</span>
                      </div>
                      <div className='flex items-center gap-3 text-sm text-[var(--text-secondary)]'>
                        <CaretRight size={16} className='text-yellow-500' weight="bold" />
                        <span><strong>Veluthamanal → College:</strong> 1 km (Walk: 5 min)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {selectedMode === 'train' && (
            <motion.div
              key="train"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className='space-y-8'
            >
              {/* Train intro */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className='bg-gradient-to-r from-asparagus-400/10 via-appleGreen-400/10 to-yellowGreen-400/10 p-6 rounded-xl border-2 border-asparagus-400/20 shadow-lg'
              >
                <div className='flex items-center gap-3 mb-3'>
                  <Train size={28} className='text-asparagus-400 flex-shrink-0' weight="duotone" />
                  <h3 className='text-lg font-semibold text-[var(--text-heading)]'>
                    Nearest Railway Station: Karunagappally Railway Station (KPY)
                  </h3>
                </div>
                <p className='text-[var(--text-secondary)] text-sm ml-11'>
                  Distance from College: <span className='text-asparagus-400 font-semibold'>Approx. 2 km</span>
                </p>
              </motion.div>

              {/* From Railway Station */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onHoverStart={() => setHoveredCard('railway')}
                onHoverEnd={() => setHoveredCard(null)}
                className={`bg-[var(--bg-card)] p-8 p-5 rounded-2xl border-2 transition-all duration-300 shadow-xl ${
                  hoveredCard === 'railway' 
                    ? 'border-asparagus-400/50 shadow-2xl shadow-asparagus-400/20' 
                    : 'border-[var(--border-color)]'
                }`}
              >
                <h3 className='text-2xl font-bold mb-6 flex items-center gap-3'>
                  <div className='p-2 bg-gradient-to-br from-asparagus-400 to-appleGreen-400 rounded-lg'>
                    <MapPin size={24} className='text-white' weight="duotone" />
                  </div>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-asparagus-400 to-appleGreen-400'>
                    From Railway Station
                  </span>
                </h3>

                {/* Option cards */}
                <div className='space-y-4'>
                  {/* Option 1 */}
                  <div className='p-5 bg-gradient-to-r from-appleGreen-400/5 to-transparent rounded-xl border-l-4 border-appleGreen-400'>
                    <div className='flex items-start gap-3 mb-3'>
                      <div className='bg-gradient-to-br from-appleGreen-400 to-yellowGreen-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md'>
                        1
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-base font-semibold text-[var(--text-heading)] mb-1'>
                          Auto-rickshaw{' '}
                          <span className='inline-flex items-center gap-1 text-xs font-normal text-appleGreen-400 bg-appleGreen-400/10 px-2 py-0.5 rounded-full'>
                            <Sparkle size={12} weight="fill" /> Fastest
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className='ml-10 space-y-2.5'>
                      <div className='flex items-center gap-3 text-sm text-[var(--text-secondary)]'>
                        <CaretRight size={16} className='text-appleGreen-400' weight="bold" />
                        <span><strong>Railway Station → College:</strong> 2 km (5 min by auto)</span>
                      </div>
                    </div>
                  </div>

                  {/* Option 2 */}
                  <div className='p-5 bg-gradient-to-r from-yellow-400/5 to-transparent rounded-xl border-l-4 border-yellow-400'>
                    <div className='flex items-start gap-3 mb-3'>
                      <div className='bg-gradient-to-br from-yellow-400 to-asparagus-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md'>
                        2
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-base font-semibold text-[var(--text-heading)] mb-1'>
                          Bus{' '}
                          <span className='inline-flex items-center gap-1 text-xs font-normal text-yellow-600 dark:text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full'>
                            <Warning size={12} weight="fill" /> Limited Service
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className='ml-10 space-y-2.5'>
                      <div className='flex items-center gap-3 text-sm text-[var(--text-secondary)]'>
                        <CaretRight size={16} className='text-yellow-500' weight="bold" />
                        <span><strong>Station → Veluthamanal:</strong> 1 km (3 min)</span>
                      </div>
                      <div className='flex items-center gap-3 text-sm text-[var(--text-secondary)]'>
                        <CaretRight size={16} className='text-yellow-500' weight="bold" />
                        <span><strong>Veluthamanal → College:</strong> 1 km (Walk: 5 min)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: contentVisible ? 1 : 0, y: contentVisible ? 0 : 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className='mt-12 bg-gradient-to-br from-appleGreen-400/10 via-yellowGreen-400/5 to-asparagus-400/10 p-8 rounded-2xl border-2 border-appleGreen-400/30 shadow-xl'
        >
          <h3 className='text-2xl font-bold text-[var(--text-heading)] mb-6 flex items-center gap-3'>
            <div className='p-2 bg-gradient-to-br from-appleGreen-400 to-yellowGreen-400 rounded-lg'>
              <Info size={24} className='text-white' weight="duotone" />
            </div>
            Travel Tips
          </h3>
          <div className='grid gap-5'>
            <div className='flex items-start gap-3 p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] hover:border-appleGreen-400/30 transition-colors'>
              <span className='text-2xl flex-shrink-0'>🚖</span>
              <p className='text-[var(--text-secondary)] text-sm leading-relaxed'>
                Auto-rickshaws readily available from Karunagappally town, Railway Station, and Driver Junction.
              </p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] hover:border-appleGreen-400/30 transition-colors'>
              <span className='text-2xl flex-shrink-0'>🕒</span>
              <p className='text-[var(--text-secondary)] text-sm leading-relaxed'>
                Plan ahead to avoid peak-hour traffic for a smooth journey.
              </p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] hover:border-appleGreen-400/30 transition-colors'>
              <span className='text-2xl flex-shrink-0'>📍</span>
              <p className='text-[var(--text-secondary)] text-sm leading-relaxed'>
                Use{' '}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=College+of+Engineering+Karunagappally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-appleGreen-400 hover:text-appleGreen-500 font-semibold underline'
                >
                  Google Maps
                </a>{' '}
                for real-time navigation to the college.
              </p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] hover:border-appleGreen-400/30 transition-colors'>
              <span className='text-2xl flex-shrink-0'>☎️</span>
              <div className='text-[var(--text-secondary)] text-sm leading-relaxed'>
                <p className='mb-2'>Contact our helpdesk for travel guidance:</p>
                <div className='space-y-1.5'>
                  <a 
                    href="tel:+919188789984"
                    className='block text-appleGreen-400 hover:text-appleGreen-500 font-medium transition-colors'
                  >
                    Abhay Dev P: +919188789984
                  </a>
                  <a 
                    href="tel:+919745139916"
                    className='block text-appleGreen-400 hover:text-appleGreen-500 font-medium transition-colors'
                  >
                    Itihas S: +919745139916
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: contentVisible ? 1 : 0, scale: contentVisible ? 1 : 0.95 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className='mt-8 text-center'
        >
          <h3 className='text-3xl font-bold mb-3 flex items-center justify-center gap-2'>
            <Sparkle size={32} className='text-appleGreen-400' weight="fill" />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-appleGreen-400 via-yellowGreen-400 to-asparagus-400'>
              See You at AARAMBH 3.0!
            </span>
            <Sparkle size={32} className='text-asparagus-400' weight="fill" />
          </h3>
          <p className='text-[var(--text-secondary)] text-lg max-w-3xl mx-auto leading-relaxed'>
            Join us for two days of innovation, creativity, and excitement at College of Engineering Karunagappally —
            where ideas take flight!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelGuide;
