import { useState, memo } from 'react';
import { Users, Calendar } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SundayFunTicket from './SundayFunTicket';
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

const Events = memo(() => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const [selectedType, setSelectedType] = useState('All');

  const events = [
    {
      id: 1,
      title: 'Prayatna - 24 Hour Hackathon',
      type: 'Hackathon',
      description: '24-hour coding marathon to solve real-world problems',
      illustration: HackathonIllustration,
      date: 'January 4',
      duration: '24 hours',
      fee: 1000,
    },
    {
      id: 2,
      title: 'Kalpana - Designathon',
      type: 'Hackathon',
      description: 'Design marathon to create innovative and creative solutions',
      illustration: DesignIllustration,
      date: 'January 5',
      duration: '6-7 hours',
      fee: 800,
    },
    {
      id: 3,
      title: 'Ranam - Robo War',
      type: 'Competition',
      description: 'Battle of the bots - design and fight with your robots',
      illustration: RobotIllustration,
      date: 'January 5',
      duration: '6 hours',
      fee: 600,
    },
    {
      id: 11,
      title: 'Daurapatham - Line Follower Challenge',
      type: 'Competition',
      description: 'Build and race autonomous line-following robots in this exciting challenge',
      illustration: RobotIllustration,
      date: 'January 5',
      duration: '3 hours',
      fee: 0,
    },
    {
      id: 10,
      title: 'UI/UX Workshop',
      type: 'Workshop',
      description: 'Learn design principles, user experience, and create stunning interfaces',
      illustration: DesignIllustration,
      date: 'January 4',
      duration: '2 hours',
      fee: 0,
    },
    {
      id: 8,
      title: 'Web3 Workshop',
      type: 'Workshop',
      description: 'Explore blockchain, NFTs, and decentralized applications (Details coming soon)',
      illustration: Web3Illustration,
      date: 'January 4',
      duration: '3 hours',
      fee: 0,
    },
    {
      id: 7,
      title: 'Hardware Workshop',
      type: 'Workshop',
      description: 'Hands-on session with cutting-edge hardware technologies (Details coming soon)',
      illustration: HardwareIllustration,
      date: 'January 5',
      duration: '3 hours',
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
      date: 'January 5',
      duration: '1 days',
      fee: 0,
    },
    {
      id: 9,
      title: 'Entrepreneur Talk Session',
      type: 'Talk Session',
      description: 'Inspiring talk session with successful entrepreneurs sharing their journey and insights',
      illustration: MentalistIllustration,
      date: 'January 4',
      duration: '1.5 hours',
      fee: 0,
    },
  ];

  const eventTypes = ['All', 'Hackathon', 'Competition', 'Workshop', 'Entertainment', 'Exhibition', 'Talk Session'];

  const filteredEvents =
    selectedType === 'All' ? events : events.filter(event => event.type === selectedType);

  return (
    <section id='events' className='py-12 lg:py-24 bg-[var(--bg-primary)]'>
      <div className='container mx-auto px-4 lg:px-8'>
        {/* Ticket Section - General Entry and Sunday Fun */}
        <div className='mb-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* General Entry Ticket */}
            <div className='bg-[var(--bg-card)] rounded-2xl overflow-hidden border-2 border-[var(--border-color)] shadow-2xl hover:shadow-appleGreen-400/20 transition-all duration-500 group'>
              <div className='relative overflow-hidden bg-gradient-to-br from-appleGreen-400/5 via-asparagus-400/5 to-yellowGreen-400/5'>
                <img 
                  src="/assets/general-ticket.png" 
                  alt="AARAMBH 3.0 General Entry Ticket"
                  className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              </div>
              
              <div className='p-6 lg:p-8 text-center bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-secondary)]'>
                <h3 className='text-2xl lg:text-3xl font-bold text-[var(--text-heading)] mb-3 group-hover:text-appleGreen-400 dark:group-hover:text-appleGreen-300 transition-colors duration-300'>
                  General Entry Ticket
                </h3>
                <p className='text-[var(--text-secondary)] mb-6 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto'>
                  Get access to all entertainment shows, exhibitions, and workshops at AARAMBH 3.0
                </p>
                
                <a 
                  href="https://konfhub.com/widget/aarambh26?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=68156&ticketId=68156%7C1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='inline-block btn-primary text-base px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
                >
                  Get Your Ticket Now
                </a>
              </div>
            </div>

            {/* Sunday Fun Ticket */}
            <SundayFunTicket />
          </div>
        </div>

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
            Explore our exciting lineup of workshops, hackathons, competitions, and talk sessions
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
                  {event.id === 1 ? (
                    <img 
                      src="/assets/prayatna-ticket.png" 
                      alt="Prayatna Hackathon Ticket"
                      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                  ) : event.id === 2 ? (
                    <img 
                      src="/assets/kalpana-ticket.png" 
                      alt="Kalpana Designathon Ticket"
                      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                  ) : event.id === 3 ? (
                    <img 
                      src="/assets/ranam-ticket.png" 
                      alt="Ranam Robo War Ticket"
                      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                  ) : event.id === 11 ? (
                    <img 
                      src="/assets/daurapatham-ticket.png" 
                      alt="Daurapatham Line Follower Challenge Ticket"
                      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                  ) : (
                    <IllustrationComponent 
                      className='h-40 w-auto text-[var(--ill-primary)] transition-transform duration-500 group-hover:scale-110' 
                      aria-hidden={true}
                    />
                  )}
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

                {event.id === 1 ? (
                  <a 
                    href="https://konfhub.com/widget/aarambh26?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=66189&ticketId=66189%7C1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full btn-primary inline-block text-center'
                  >
                    Register Now
                  </a>
                ) : event.id === 2 ? (
                  <a 
                    href="https://konfhub.com/widget/aarambh26?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=66190%2C67392&ticketId=66190%7C%3B67392%7C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full btn-primary inline-block text-center'
                  >
                    Register Now
                  </a>
                ) : event.id === 3 ? (
                  <a 
                    href="https://konfhub.com/widget/aarambh26?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=67304%2C67305&ticketId=67304%7C%3B67305%7C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full btn-primary inline-block text-center'
                  >
                    Register Now
                  </a>
                ) : event.id === 7 ? (
                  <a 
                    href="https://bit.ly/4pH6DGL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full btn-primary inline-block text-center'
                  >
                    Register Now
                  </a>
                ) : event.id === 8 ? (
                  <a 
                    href="https://forms.gle/et1zNm1d4g7FVrR29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full btn-primary inline-block text-center'
                  >
                    Register Now
                  </a>
                ) : event.id === 10 ? (
                  <a 
                    href="https://forms.gle/JXVzCxuNY78VpLgp7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full btn-primary inline-block text-center'
                  >
                    Register Now
                  </a>
                ) : event.id === 11 ? (
                  <a 
                    href="https://konfhub.com/widget/aarambh26?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=68474%2C68475&ticketId=68474%7C%3B68475%7C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full btn-primary inline-block text-center'
                  >
                    Register Now
                  </a>
                ) : event.id === 5 ? (
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdUvw7rKNS6e1Pd17PnslGldS-OI0MEnAV7hqNaoYCgamZrXA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full btn-primary inline-block text-center'
                  >
                    Register Now
                  </a>
                ) : event.id === 9 ? (
                  <a 
                    href="https://forms.gle/Gepm3z4jZx3A6jjR9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-full btn-primary inline-block text-center'
                  >
                    Register Now
                  </a>
                ) : event.id === 6 ? (
                  <button 
                    onClick={() => {
                      const eventsSection = document.getElementById('events');
                      if (eventsSection) {
                        eventsSection.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          alert('Please register for the General Entry Ticket to access the Auto Expo and other exhibitions!');
                        }, 500);
                      }
                    }}
                    className='w-full btn-primary'
                  >
                    Register Now
                  </button>
                ) : (
                  <button className='w-full btn-primary'>Coming soon</button>
                )}
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
});

Events.displayName = 'Events';

export default Events;
