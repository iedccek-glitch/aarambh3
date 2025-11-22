interface IllustrationProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export const HackathonIllustration = ({ className = '', 'aria-hidden': ariaHidden = true }: IllustrationProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
  >
    {/* Laptop */}
    <rect x="40" y="80" width="120" height="80" rx="4" fill="currentColor" opacity="0.1" />
    <rect x="45" y="85" width="110" height="60" rx="2" fill="currentColor" opacity="0.2" />
    <path d="M 50 90 L 150 90 L 150 140 L 50 140 Z" fill="currentColor" opacity="0.15" />
    
    {/* Code lines */}
    <line x1="60" y1="100" x2="90" y2="100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    <line x1="60" y1="110" x2="110" y2="110" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    <line x1="60" y1="120" x2="80" y2="120" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    <line x1="60" y1="130" x2="100" y2="130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    
    {/* Coffee cup */}
    <rect x="120" y="100" width="25" height="30" rx="2" fill="currentColor" opacity="0.3" />
    <ellipse cx="132.5" cy="100" rx="12.5" ry="3" fill="currentColor" opacity="0.4" />
    <path d="M 145 110 Q 155 110 155 115 Q 155 120 145 120" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
    
    {/* Keyboard base */}
    <rect x="35" y="160" width="130" height="5" rx="2" fill="currentColor" opacity="0.2" />
    
    {/* Decorative elements - brain/idea */}
    <circle cx="170" cy="50" r="15" fill="currentColor" opacity="0.15" />
    <path d="M 165 45 Q 170 35 175 45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
    <circle cx="167" cy="50" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="173" cy="50" r="3" fill="currentColor" opacity="0.5" />
  </svg>
);
