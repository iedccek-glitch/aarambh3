import { memo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MondayMadnessTicket = memo(() => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className='bg-[var(--bg-card)] rounded-2xl overflow-hidden border-2 border-[var(--border-color)] shadow-2xl hover:shadow-appleGreen-400/20 transition-all duration-500 group h-full'>
        <div className='relative overflow-hidden bg-gradient-to-br from-appleGreen-400/5 via-asparagus-400/5 to-yellowGreen-400/5 aspect-[4/3]'>
          <img 
            src="/assets/monday-madness-ticket.png" 
            alt="AARAMBH 3.0 Monday Madness Ticket"
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </div>
        
        <div className='p-6 lg:p-8 text-center bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-secondary)]'>
          <h3 className='text-2xl lg:text-3xl font-bold text-[var(--text-heading)] mb-3 group-hover:text-appleGreen-400 dark:group-hover:text-appleGreen-300 transition-colors duration-300'>
            Monday Madness
          </h3>
          <p className='text-[var(--text-secondary)] mb-6 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto'>
            Access to AutoExpo, Line Follower, Networking, and Robotic Expo events on Monday.
          </p>
          
          <a 
            href="https://konfhub.com/widget/aarambh26?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=70486&ticketId=70486%7C1"
            target="_blank"
            rel="noopener noreferrer"
            className='inline-block btn-primary text-base px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
          >
            Get Your Ticket Now
          </a>
        </div>
      </div>
    </div>
  );
});

MondayMadnessTicket.displayName = 'MondayMadnessTicket';

export default MondayMadnessTicket;
