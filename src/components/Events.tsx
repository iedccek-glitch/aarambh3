import { useState } from 'react';
import { Users, Calendar } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  HackathonIllustration,
  DesignIllustration,
  RobotIllustration,
  MusicIllustration,
  MentalistIllustration,
  AutoExpoIllustration,
  HardwareIllustration,
  Web3Illustration,
} from '../assets/illustrations';

const Events = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const [selectedType, setSelectedType] = useState('All');

  const events = [
    {
      id: 1,
      title: 'Prayatna - 24 Hour Hackathon',
      type: 'Hackathon',
      description: '24-hour coding marathon to solve real-world problems',
      illustration: HackathonIllustration,
      date: 'January 4-5',
      duration: '24 hours',
      fee: 1000,
    },
    {
      id: 2,
      title: 'Kalpana - Designathon',
      type: 'Hackathon',
      description: 'Design marathon to create innovative and creative solutions',
      illustration: DesignIllustration,
      date: 'January 4-5',
      duration: '24 hours',
      fee: 800,
    },
    {
      id: 3,
      title: 'Renam - Robo War',
      type: 'Competition',
      description: 'Battle of the bots - design and fight with your robots',
      illustration: RobotIllustration,
      date: 'January 5',
      duration: '6 hours',
      fee: 600,
    },
    {
      id: 4,
      title: 'Thillana - Music Show',
      type: 'Entertainment',
      description: 'Experience an amazing musical performance to celebrate innovation',
      illustration: MusicIllustration,
      date: 'January 5',
      duration: '2 hours',
      fee: 0,
    },
    {
      id: 5,
      title: 'Rahasya - Mentalism Show',
      type: 'Entertainment',
      description: 'Mind-bending mentalism show for entertainment',
      illustration: MentalistIllustration,
      date: 'January 4',
      duration: '1 hour',
      fee: 0,
    },
    {
      id: 6,
      title: 'Chakravyuh - Auto Expo',
      type: 'Exhibition',
      description: 'Showcase of innovative automobile designs and technology',
      illustration: AutoExpoIllustration,
      date: 'January 4-5',
      duration: '2 days',
      fee: 0,
    },
    {
      id: 7,
      title: 'Hardware Workshop',
      type: 'Workshop',
      description: 'Hands-on session with cutting-edge hardware technologies (Details coming soon)',
      illustration: HardwareIllustration,
      date: 'January 4',
      duration: '3 hours',
      fee: 0,
    },
    {
      id: 8,
      title: 'Web3 Workshop',
      type: 'Workshop',
      description: 'Explore blockchain, NFTs, and decentralized applications (Details coming soon)',
      illustration: Web3Illustration,
      date: 'January 5',
      duration: '3 hours',
      fee: 0,
    },
  ];

  const eventTypes = ['All', 'Hackathon', 'Competition', 'Workshop', 'Entertainment', 'Exhibition'];

  const filteredEvents =
    selectedType === 'All' ? events : events.filter(event => event.type === selectedType);

  return (
    <section id='events' className='py-12 lg:py-24 bg-[var(--bg-primary)]'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className='text-4xl lg:text-6xl font-bold font-heading mb-6'>
            <span className='gradient-text'>Events</span>
          </h2>
          <p className='text-xl text-[var(--text-secondary)] max-w-3xl mx-auto'>
            Explore our exciting lineup of workshops, hackathons, competitions, and talks
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {eventTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedType === type
                  ? 'bg-gradient-to-r from-appleGreen-400 to-asparagus-400 text-white dark:text-black shadow-lg'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-appleGreen-400 hover:text-[var(--text-primary)]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {filteredEvents.map((event, index) => {
            const IllustrationComponent = event.illustration;
            return (
              <div
                key={event.id}
                className='bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border-color)] card-hover shadow-lg group animate-fade-in'
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className='relative overflow-hidden h-48 bg-gradient-to-br from-[var(--ill-primary)]/10 to-[var(--ill-secondary)]/5 flex items-center justify-center'>
                  <IllustrationComponent 
                    className='h-40 w-auto text-[var(--ill-primary)] transition-transform duration-500 group-hover:scale-110' 
                    aria-hidden={true}
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='bg-gradient-to-r from-appleGreen-400 to-asparagus-400 text-white dark:text-black px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg'>
                      {event.type}
                    </span>
                  </div>
                </div>

              <div className='p-6'>
                <h3 className='text-xl font-semibold text-[var(--text-heading)] mb-3 group-hover:text-appleGreen-400 dark:group-hover:text-appleGreen-300 transition-colors'>
                  {event.title}
                </h3>
                <p className='text-[var(--text-secondary)] mb-4 text-sm leading-relaxed line-clamp-2'>
                  {event.description}
                </p>

                <div className='space-y-2.5 text-sm text-[var(--text-secondary)] mb-4'>
                  <div className='flex items-center gap-2'>
                    <Calendar size={16} color="currentColor" className='text-asparagus-400' />
                    <span>{event.date}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Users size={16} color="currentColor" className='text-asparagus-400' />
                    <span>Duration: {event.duration}</span>
                  </div>
                  {/* <div className='flex items-center gap-2'>
                    <CurrencyInr
                      size={16}
                      color="currentColor"
                      className={event.fee === 0 ? 'text-seaGreen-400' : 'text-appleGreen-400'}
                    />
                    <span
                      className={`font-semibold ${event.fee === 0 ? 'text-seaGreen-400' : 'text-appleGreen-400 dark:text-appleGreen-300'}`}
                    >
                      {event.fee === 0 ? 'Free' : `₹${event.fee}`}
                    </span>
                  </div> */}
                </div>

                <button className='w-full btn-primary'>Coming soon</button>
              </div>
            </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className='text-center py-16'>
            <p className='text-[var(--text-secondary)] text-lg'>
              No events found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
