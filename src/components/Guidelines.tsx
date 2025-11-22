import { memo } from 'react';
import { FileText, Users, Trophy, Clock, WarningCircle, CheckCircle } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Guidelines = memo(() => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  const guidelines = [
    {
      icon: <Users className='w-6 h-6' color="currentColor" />,
      title: 'Team Formation',
      description:
        'Teams can have 2-4 members. Individual participation is also allowed for certain events.',
    },
    {
      icon: <Clock className='w-6 h-6' color="currentColor" />,
      title: 'Registration Deadline',
      description:
        'All registrations must be completed before December 29, 2025. Late registrations will not be accepted.',
    },
    {
      icon: <FileText className='w-6 h-6' color="currentColor" />,
      title: 'Documentation',
      description:
        'All participants must carry valid ID proof and registration confirmation during the event.',
    },
    {
      icon: <Trophy className='w-6 h-6' color="currentColor" />,
      title: 'Competition Rules',
      description:
        'Fair play is mandatory. Any form of cheating or misconduct will lead to immediate disqualification.',
    },
    {
      icon: <CheckCircle className='w-6 h-6' color="currentColor" />,
      title: 'Submission Guidelines',
      description:
        'All project submissions must be original work. Plagiarism will result in disqualification.',
    },
    {
      icon: <WarningCircle className='w-6 h-6' color="currentColor" />,
      title: 'Code of Conduct',
      description:
        'Maintain professional behavior throughout the event. Respect fellow participants and organizers.',
    },
  ];

  return (
    <section id='guidelines' className='py-12 lg:py-20 bg-[var(--bg-secondary)]'>
      <div className='max-w-7xl mx-auto px-4 lg:px-8'>
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className='text-4xl lg:text-6xl font-bold font-heading mb-6'>
            <span className='gradient-text'>Guidelines</span>
          </h2>
          <p className='text-xl text-[var(--text-secondary)] max-w-3xl mx-auto'>
            Important rules and regulations for all participants
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
          {guidelines.map((guideline, index) => (
            <div
              key={index}
              className='bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)] card-hover shadow-lg group'
            >
              <div className='flex items-start gap-4 mb-4'>
                <div className='text-appleGreen-400 dark:text-appleGreen-300 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                  {guideline.icon}
                </div>
                <h3 className='text-xl font-semibold text-[var(--text-heading)] pt-2 group-hover:text-appleGreen-400 transition-colors'>
                  {guideline.title}
                </h3>
              </div>
              <p className='text-[var(--text-secondary)] leading-relaxed'>
                {guideline.description}
              </p>
            </div>
          ))}
        </div>

        <div className='bg-gradient-to-r from-red-500/10 to-red-600/10 border-2 border-red-500/50 rounded-xl p-8 text-center shadow-xl'>
          <div className='flex items-center justify-center mb-4'>
            <div className='text-red-500 dark:text-red-400 mr-3'>
              <WarningCircle className='w-8 h-8' weight='fill' />
            </div>
            <h3 className='text-2xl font-bold text-red-500 dark:text-red-400'>Important Notice</h3>
          </div>
          <p className='text-[var(--text-primary)] text-lg leading-relaxed max-w-3xl mx-auto'>
            Violation of any guidelines will result in immediate disqualification from the event.
            Please read and understand all rules before participating. General ticket is mandatory
            for attending AARAMBH 3.0
          </p>
        </div>
      </div>
    </section>
  );
});

Guidelines.displayName = 'Guidelines';

export default Guidelines;
