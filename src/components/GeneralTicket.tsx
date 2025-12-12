import { memo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GeneralTicket = memo(() => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      id='general-ticket' 
      className='py-16 lg:py-24 bg-[var(--bg-primary)]'
      ref={sectionRef}
    >
      <div className='container mx-auto px-4 lg:px-8'>
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className='text-4xl lg:text-6xl font-bold font-heading mb-6'>
            <span className='gradient-text'>General Entry Ticket</span>
          </h2>
          <p className='text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8'>
            Get access to all entertainment shows, exhibitions, and workshops
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className='bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl'>
            <div className='aspect-[16/9] lg:aspect-[21/9] w-full bg-gradient-to-br from-[var(--ill-primary)]/10 to-[var(--ill-secondary)]/5 flex items-center justify-center p-4 lg:p-8'>
              <img 
                src="/assets/general-ticket.png" 
                alt="AARAMBH 3.0 General Entry Ticket"
                className='w-full h-full object-contain'
              />
            </div>
            
            <div className='p-6 lg:p-8 text-center'>
              <h3 className='text-2xl lg:text-3xl font-bold text-[var(--text-heading)] mb-4'>
                General Entry Pass
              </h3>
              <p className='text-[var(--text-secondary)] mb-6 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto'>
                Enjoy full access to all entertainment events, exhibitions, and workshop sessions during AARAMBH 3.0
              </p>
              
              <a 
                href="https://konfhub.com/widget/aarambh26"
                target="_blank"
                rel="noopener noreferrer"
                className='inline-block btn-primary text-lg px-8 py-4'
              >
                Get Your Ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

GeneralTicket.displayName = 'GeneralTicket';

export default GeneralTicket;
