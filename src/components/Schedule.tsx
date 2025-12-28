import { memo } from 'react';
import { Calendar } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapTimeline, TimelineEvent } from './MapTimeline';

const Schedule = memo(() => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const day1Events: TimelineEvent[] = [
    { 
      id: 'd1-checkin',
      time: '8:00 AM – 9:30 AM', 
      title: 'Check-In', 
      description: 'Registration and badge collection',
      venue: 'Main Entrance',
      t: 0.02,
      labelSide: 'bottom'
    },
    { 
      id: 'd1-inauguration',
      time: '9:00 AM – 11:00 AM', 
      title: 'Inauguration', 
      description: 'Opening ceremony and keynote address',
      venue: 'Main Auditorium',
      t: 0.10,
      labelSide: 'top'
    },
    { 
      id: 'd1-workshop-hackathon',
      time: '11:00 AM – 12:30 PM', 
      title: 'Workshop: For Hackathon', 
      description: 'Preparation and guidance for hackathon participants',
      venue: 'Seminar Hall',
      t: 0.22,
      labelSide: 'bottom'
    },
    { 
      id: 'd1-workshop-uiux',
      time: '11:00 AM – 12:30 PM', 
      title: 'Workshop: UI/UX', 
      description: 'Design principles and user experience fundamentals',
      venue: 'Design Studio',
      t: 0.28,
      labelSide: 'top'
    },
    { 
      id: 'd1-entrepreneur-talk',
      time: '11:30 AM – 1:00 PM', 
      title: 'Entrepreneur Talk Session', 
      description: 'Inspiring talk with successful entrepreneurs',
      venue: 'Conference Room',
      t: 0.38,
      labelSide: 'bottom'
    },
    { 
      id: 'd1-web3',
      time: '2:00 PM – 5:00 PM', 
      title: 'Workshop: Web3', 
      description: 'Blockchain and decentralized technologies',
      venue: 'Lab 2',
      t: 0.58,
      labelSide: 'top'
    },
    { 
      id: 'd1-hackathon',
      time: '2:00 PM – Continue (24-Hour)', 
      title: 'Hackathon (24-Hour)', 
      description: '24-hour coding marathon begins',
      venue: 'Tech Arena',
      t: 0.72,
      labelSide: 'bottom'
    },
    { 
      id: 'd1-mentalist',
      time: '5:00 PM – 6:00 PM', 
      title: 'Mentalist Show', 
      description: 'Mind-bending mentalism performance',
      venue: 'Main Auditorium',
      t: 0.92,
      labelSide: 'top'
    },
  ];

  const day2Events: TimelineEvent[] = [
    { 
      id: 'd2-checkin',
      time: '8:00 AM – 9:30 AM', 
      title: 'Check-In', 
      description: 'Registration and badge collection',
      venue: 'Main Entrance',
      t: 0.02,
      labelSide: 'bottom'
    },
    { 
      id: 'd2-hardware',
      time: '9:00 AM – 11:00 AM', 
      title: 'Hardware Workshop', 
      description: 'Hands-on session with hardware technologies',
      venue: 'Lab 1',
      t: 0.10,
      labelSide: 'top'
    },
    { 
      id: 'd2-designathon',
      time: '9:30 AM – 2:00 PM', 
      title: 'Designathon', 
      description: 'UI/UX and web design competition',
      venue: 'Design Studio',
      t: 0.18,
      labelSide: 'bottom'
    },
    { 
      id: 'd2-robo1',
      time: '10:30 AM – 12:30 PM', 
      title: 'Robo War (Phase 1)', 
      description: 'Battle bots in action',
      venue: 'Arena',
      t: 0.28,
      labelSide: 'top'
    },
    { 
      id: 'd2-line1',
      time: '10:30 AM – 12:30 PM', 
      title: 'Line Follower (Phase 1)', 
      description: 'Autonomous robot line-following challenge',
      venue: 'Arena',
      t: 0.34,
      labelSide: 'bottom'
    },
    { 
      id: 'd2-robo2',
      time: '1:30 PM – 4:30 PM', 
      title: 'Robo War (Finals)', 
      description: 'Championship round and finals',
      venue: 'Arena',
      t: 0.52,
      labelSide: 'top'
    },
    { 
      id: 'd2-line2',
      time: '1:30 PM – 4:30 PM', 
      title: 'Line Follower (Finals)', 
      description: 'Final round and winner selection',
      venue: 'Arena',
      t: 0.58,
      labelSide: 'bottom'
    },
    { 
      id: 'd2-hackathon-end',
      time: '2:00 PM – 5:00 PM', 
      title: 'Hackathon Ends & Evaluation', 
      description: 'Submission review and judging',
      venue: 'Tech Arena',
      t: 0.68,
      labelSide: 'top'
    },
    { 
      id: 'd2-closing',
      time: '5:30 PM – 6:30 PM', 
      title: 'Closing Ceremony', 
      description: 'Awards and prize distribution',
      venue: 'Main Auditorium',
      t: 0.88,
      labelSide: 'bottom'
    },
  ];

  return (
    <section id='schedule' className='py-12 lg:py-20'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className='text-4xl lg:text-6xl font-bold font-heading mb-6'>
            <span className='gradient-text'>Schedule</span>
          </h2>
          <p className='text-xl text-[var(--text-secondary)] max-w-3xl mx-auto'>
            Follow the journey through two days of innovation and collaboration
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto'>
          {/* Day 1 */}
          <div className='flex flex-col items-center space-y-6'>
            <div className='flex justify-center mb-8'>
              <div className='inline-flex items-center gap-2 bg-gradient-to-r from-appleGreen-400 to-asparagus-400 text-white dark:text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg'>
                <Calendar size={24} weight="duotone" />
                <span>Day 1 - January 4, 2026</span>
              </div>
            </div>
            <MapTimeline events={day1Events} />
          </div>

          {/* Day 2 */}
          <div className='flex flex-col items-center space-y-6'>
            <div className='flex justify-center mb-8'>
              <div className='inline-flex items-center gap-2 bg-gradient-to-r from-asparagus-400 to-seaGreen-400 text-white dark:text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg'>
                <Calendar size={24} weight="duotone" />
                <span>Day 2 - January 5, 2026</span>
              </div>
            </div>
            <MapTimeline events={day2Events} />
          </div>
        </div>
      </div>
    </section>
  );
});

Schedule.displayName = 'Schedule';

export default Schedule;
