interface IllustrationProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export const HardwareIllustration = ({ className = '', 'aria-hidden': ariaHidden = true }: IllustrationProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
  >
    {/* Circuit board base */}
    <rect x="40" y="60" width="120" height="100" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
    
    {/* Microchip */}
    <rect x="70" y="85" width="40" height="40" rx="2" fill="currentColor" opacity="0.25" />
    <line x1="70" y1="95" x2="60" y2="95" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <line x1="70" y1="105" x2="60" y2="105" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <line x1="70" y1="115" x2="60" y2="115" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <line x1="110" y1="95" x2="120" y2="95" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <line x1="110" y1="105" x2="120" y2="105" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <line x1="110" y1="115" x2="120" y2="115" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    
    {/* Capacitors */}
    <rect x="125" y="95" width="8" height="20" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="138" y="95" width="8" height="20" rx="1" fill="currentColor" opacity="0.3" />
    
    {/* Resistor */}
    <rect x="125" y="125" width="25" height="8" rx="1" fill="currentColor" opacity="0.25" />
    <line x1="125" y1="129" x2="115" y2="129" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <line x1="150" y1="129" x2="160" y2="129" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    
    {/* LED */}
    <circle cx="55" cy="145" r="6" fill="currentColor" opacity="0.35" />
    <line x1="55" y1="151" x2="55" y2="158" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <line x1="55" y1="139" x2="55" y2="132" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    
    {/* Connection traces */}
    <path d="M 90 125 L 90 140 L 100 140" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" />
    <path d="M 110 105 L 125 105" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" />
    <path d="M 90 85 L 90 70 L 140 70 L 140 95" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" />
    
    {/* Breadboard dots */}
    <circle cx="50" cy="75" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="58" cy="75" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="66" cy="75" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="50" cy="83" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="58" cy="83" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="66" cy="83" r="2" fill="currentColor" opacity="0.3" />
    
    {/* Arduino/board pins */}
    <rect x="42" y="165" width="116" height="8" fill="currentColor" opacity="0.15" />
    <line x1="50" y1="165" x2="50" y2="173" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="60" y1="165" x2="60" y2="173" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="70" y1="165" x2="70" y2="173" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="80" y1="165" x2="80" y2="173" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="90" y1="165" x2="90" y2="173" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="100" y1="165" x2="100" y2="173" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="110" y1="165" x2="110" y2="173" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="120" y1="165" x2="120" y2="173" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="130" y1="165" x2="130" y2="173" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="140" y1="165" x2="140" y2="173" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="150" y1="165" x2="150" y2="173" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
  </svg>
);
