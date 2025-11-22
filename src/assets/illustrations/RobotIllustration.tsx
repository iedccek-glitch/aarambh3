interface IllustrationProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export const RobotIllustration = ({ className = '', 'aria-hidden': ariaHidden = true }: IllustrationProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
  >
    {/* Antenna */}
    <line x1="100" y1="40" x2="100" y2="55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
    <circle cx="100" cy="35" r="5" fill="currentColor" opacity="0.5" />
    
    {/* Robot head */}
    <rect x="75" y="55" width="50" height="45" rx="5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />
    
    {/* Eyes */}
    <circle cx="88" cy="75" r="6" fill="currentColor" opacity="0.6" />
    <circle cx="112" cy="75" r="6" fill="currentColor" opacity="0.6" />
    
    {/* Mouth */}
    <line x1="85" y1="90" x2="115" y2="90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    
    {/* Robot body */}
    <rect x="65" y="105" width="70" height="60" rx="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
    
    {/* Control panel */}
    <circle cx="85" cy="125" r="5" fill="currentColor" opacity="0.4" />
    <circle cx="100" cy="125" r="5" fill="currentColor" opacity="0.4" />
    <circle cx="115" cy="125" r="5" fill="currentColor" opacity="0.4" />
    <rect x="75" y="140" width="50" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
    <rect x="75" y="148" width="50" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
    
    {/* Arms */}
    <rect x="40" y="110" width="20" height="40" rx="3" fill="currentColor" opacity="0.25" />
    <rect x="140" y="110" width="20" height="40" rx="3" fill="currentColor" opacity="0.25" />
    <circle cx="50" cy="155" r="6" fill="currentColor" opacity="0.4" />
    <circle cx="150" cy="155" r="6" fill="currentColor" opacity="0.4" />
    
    {/* Legs */}
    <rect x="80" y="170" width="15" height="25" rx="2" fill="currentColor" opacity="0.2" />
    <rect x="105" y="170" width="15" height="25" rx="2" fill="currentColor" opacity="0.2" />
    
    {/* Lightning bolt (power) */}
    <path d="M 165 60 L 155 75 L 162 75 L 152 95 L 170 75 L 163 75 Z" fill="currentColor" opacity="0.3" />
  </svg>
);
