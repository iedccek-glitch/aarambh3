import { memo } from 'react';
import { Calendar } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapTimeline, TimelineEvent } from './MapTimeline';

const Schedule = memo(() => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const day1Events: TimelineEvent[] = [
    { 
      id: 'd1-checkin',
      time: '8:00 AM – 9:00 AM', 
      title: 'Check-in', 
      description: 'Registration and badge collection',
      venue: 'Main Entrance',
      t: 0.02,
      labelSide: 'bottom'
    },
    { 
      id: 'd1-inauguration',
      time: '9:00 AM – 10:00 AM', 
      title: 'Inauguration', 
      description: 'Opening ceremony and keynote address',
      venue: 'Main Auditorium',
      t: 0.08,
      labelSide: 'top'
    },
    { 
      id: 'd1-talk',
      time: '10:30 AM – 12:30 PM', 
      title: 'Talk Sessions', 
      description: 'Industry expert talks on emerging tech',
      venue: 'Seminar Hall',
      t: 0.20,
      labelSide: 'bottom'
    },
    { 
      id: 'd1-workshop1',
      time: '10:30 AM – 12:30 PM', 
      title: 'Workshop: Hack Relate', 
      description: 'Hands-on coding workshop',
      venue: 'Lab 1',
      t: 0.35,
      labelSide: 'top'
    },
    { 
      id: 'd1-workshop2',
      time: '2:00 PM – 5:30 PM', 
      title: 'Workshop: Web3', 
      description: 'Blockchain and decentralized tech',
      venue: 'Lab 2',
      t: 0.65,
      labelSide: 'top'
    },
    { 
      id: 'd1-hackathon',
      time: '2:00 PM', 
      title: 'Hackathon Begins', 
      description: '24-hour coding marathon starts',
      venue: 'Tech Arena',
      t: 0.80,
      labelSide: 'bottom'
    },
    { 
      id: 'd1-mentalist',
      time: '5:00 PM – 6:00 PM', 
      title: 'Talk: Mentalism Show', 
      description: 'Mind-bending mentalism performance',
      venue: 'Main Auditorium',
      t: 0.95,
      labelSide: 'top'
    },
  ];

  const day2Events: TimelineEvent[] = [
    { 
      id: 'd2-designathon',
      time: '9:30 AM – 2:30 PM', 
      title: 'Designathon', 
      description: 'UI/UX design competition',
      venue: 'Design Studio',
      t: 0.05,
      labelSide: 'top'
    },
    { 
      id: 'd2-robo1',
      time: '10:30 AM – 12:30 PM', 
      title: 'Robo War (Round 1)', 
      description: 'Battle bots in action',
      venue: 'Arena',
      t: 0.32,
      labelSide: 'top'
    },
    { 
      id: 'd2-robo2',
      time: '1:30 PM – 4:30 PM', 
      title: 'Robo War (Finals)', 
      description: 'Championship round',
      venue: 'Arena',
      t: 0.60,
      labelSide: 'top'
    },
    { 
      id: 'd2-hackend',
      time: '2:00 PM', 
      title: 'Hackathon Ends', 
      description: 'Project submissions and demos',
      venue: 'Tech Arena',
      t: 0.74,
      labelSide: 'bottom'
    },
    { 
      id: 'd2-closing',
      time: '4:30 PM – 5:30 PM', 
      title: 'Closing Ceremony', 
      description: 'Awards and prize distribution',
      venue: 'Main Auditorium',
      t: 0.87,
      labelSide: 'top'
    },
    { 
      id: 'd2-music',
      time: '6:00 PM – 8:00 PM', 
      title: 'Music Night', 
      description: 'Live performances and celebration',
      venue: 'Open Grounds',
      t: 0.95,
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
