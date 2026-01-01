import { memo } from 'react';
import { MapPin, Phone, Envelope, Globe, InstagramLogo, LinkedinLogo, FacebookLogo } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = memo(() => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);
  
  const phoneContacts = [
    { name: 'Renjith S R', number: '+919895421367' },
    { name: 'Anandhu Babu', number: '+916238765752' },
    { name: 'Malavika Sunil', number: '+918590850540' },
  ];

  const emailAddresses = ['iedccek@gmail.com', 'anandhubabu50456@gmail.com', 'malavika1904@gmail.com'];
  
  const locationDetails = [
    'College of Engineering Karunagapally',
    'Thodiyoor P.O, Karunagapally, Kollam',
    'Kerala - 690523, India',
  ];
  
  const contactInfo = [
    {
      icon: <MapPin size={24} color="currentColor" />,
      title: 'Location',
      type: 'location' as const,
    },
    {
      icon: <Phone size={24} color="currentColor" />,
      title: 'Phone',
      type: 'phone' as const,
    },
    {
      icon: <Envelope size={24} color="currentColor" />,
      title: 'Email',
      type: 'email' as const,
    },
    {
      icon: <Globe size={24} color="currentColor" />,
      title: 'Website',
      type: 'website' as const,
    },
  ];

  const socialLinks = [
    {
      icon: <FacebookLogo size={24} color="currentColor" />,
      platform: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61555235431455',
      color: 'hover:text-blue-500',
    },
    {
      icon: <InstagramLogo size={24} color="currentColor" />,
      platform: 'Instagram',
      url: 'https://www.instagram.com/a_arambh3.0?igsh=MXJsODE1OHFkYmZjMQ==',
      color: 'hover:text-pink-500',
    },
    {
      icon: <LinkedinLogo size={24} color="currentColor" />,
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/company/iedc-ceknpy/',
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <section id='contact' className='py-12 lg:py-20'>
      <div className='container mx-auto px-4 lg:px-6'>
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className='text-4xl lg:text-6xl font-bold font-heading mb-6'>
            <span className='gradient-text'>Contact Us</span>
          </h2>
          <p className='text-xl text-[var(--text-secondary)] max-w-3xl mx-auto'>
            Have questions about AARAMBH 3.0? We're here to help! Reach out to us through any of the
            following channels.
          </p>
        </div>

        <div ref={cardsRef} className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12 px-2 lg:px-0'>
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`bg-[var(--bg-card)] p-6 lg:p-8 rounded-xl border border-[var(--border-color)] card-hover shadow-lg group transition-all duration-500 text-center lg:text-left ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className='inline-block mb-4 text-appleGreen-400 dark:text-appleGreen-300 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                {info.icon}
              </div>
              <h3 className='text-xl font-semibold text-[var(--text-heading)] mb-3 group-hover:text-appleGreen-400 transition-colors'>
                {info.title}
              </h3>
              <div className='space-y-2'>
                {info.type === 'phone' && (
                  phoneContacts.map((contact, contactIndex) => (
                    <div key={contactIndex}>
                      <a
                        href={`tel:${contact.number}`}
                        className='text-[var(--text-secondary)] text-sm leading-relaxed hover:text-appleGreen-400 transition-colors cursor-pointer block'
                      >
                        {contact.name}: {contact.number}
                      </a>
                    </div>
                  ))
                )}
                {info.type === 'email' && (
                  emailAddresses.map((email, emailIndex) => (
                    <div key={emailIndex}>
                      <a
                        href={`mailto:${email}`}
                        className='text-[var(--text-secondary)] text-sm leading-relaxed hover:text-appleGreen-400 transition-colors cursor-pointer block'
                      >
                        {email}
                      </a>
                    </div>
                  ))
                )}
                {info.type === 'website' && (
                  <a
                    href='https://www.ceknpy.ac.in'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[var(--text-secondary)] text-sm leading-relaxed hover:text-appleGreen-400 transition-colors cursor-pointer block'
                  >
                    www.ceknpy.ac.in
                  </a>
                )}
                {info.type === 'location' && (
                  <a
                    href='https://www.google.com/maps/search/?api=1&query=College+of+Engineering+Karunagappally+Thodiyoor+Kollam+Kerala+690523'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='space-y-1 block cursor-pointer'
                  >
                    {locationDetails.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className='text-[var(--text-secondary)] text-sm leading-relaxed hover:text-appleGreen-400 transition-colors'
                      >
                        {detail}
                      </p>
                    ))}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className='bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)] mb-12 shadow-xl'>
          <h3 className='text-2xl font-semibold text-[var(--text-heading)] mb-6 text-center'>
            College Location
          </h3>

          <div className='w-full h-[500px] rounded-xl overflow-hidden shadow-2xl border-2 border-[var(--border-color)]'>
            <iframe
              src='https://www.google.com/maps?q=College+of+Engineering+Karunagappally+Thodiyoor+Kollam+Kerala+690523&output=embed'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>

        <div className='text-center mb-12'>
          <h3 className='text-2xl font-semibold text-[var(--text-heading)] mb-8'>
            Follow Us on Social Media
          </h3>
          <div className='flex justify-center gap-6'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className={`bg-[var(--bg-card)] p-5 rounded-full border-2 border-[var(--border-color)] hover:border-appleGreen-400 card-hover shadow-lg cursor-pointer group transform hover:scale-110 ${social.color}`}
              >
                <div className='text-[var(--text-secondary)] group-hover:text-current transition-colors'>
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Nodal Officers Section */}
        <div className='mb-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto'>
            <div className='group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 hover:border-appleGreen-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-appleGreen-400/10'>
              <div className='text-xs uppercase tracking-wider text-appleGreen-400 font-semibold mb-3'>
                Nodal Officer
              </div>
              <h4 className='text-lg font-semibold text-[var(--text-heading)] mb-3'>
                Renjith S R
              </h4>
              <a
                href='tel:+919895421367'
                className='flex items-center gap-2 text-[var(--text-secondary)] hover:text-appleGreen-400 transition-colors group'
              >
                <Phone size={18} weight="duotone" className='group-hover:animate-pulse' />
                <span className='text-sm'>+91 98954 21367</span>
              </a>
            </div>
            <div className='group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 hover:border-appleGreen-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-appleGreen-400/10'>
              <div className='text-xs uppercase tracking-wider text-appleGreen-400 font-semibold mb-3'>
                Assistant Nodal Officer
              </div>
              <h4 className='text-lg font-semibold text-[var(--text-heading)] mb-3'>
                Hridhya J
              </h4>
              <a
                href='tel:+917907675129'
                className='flex items-center gap-2 text-[var(--text-secondary)] hover:text-appleGreen-400 transition-colors group'
              >
                <Phone size={18} weight="duotone" className='group-hover:animate-pulse' />
                <span className='text-sm'>+91 79076 75129</span>
              </a>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-r from-appleGreen-400/10 to-asparagus-400/10 p-8 rounded-2xl border-2 border-appleGreen-400/20 dark:border-appleGreen-300/20 text-center shadow-xl'>
          <h3 className='text-3xl font-bold text-[var(--text-heading)] mb-4'>
            Ready to Join AARAMBH 3.0?
          </h3>
          <p className='text-[var(--text-secondary)] mb-6 leading-relaxed max-w-2xl mx-auto text-lg'>
            Don't miss out on this amazing opportunity to learn, network, and showcase your skills.
            Register now and be part of the most exciting tech fest of the year!
          </p>
          <div className='flex flex-col lg:flex-row gap-4 justify-center items-center'>
            <button
              onClick={() => {
                const element = document.getElementById('events');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className='btn-primary text-lg px-10 py-4'
            >
              Register now
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('schedule');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className='btn-secondary text-lg px-10 py-4'
            >
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
