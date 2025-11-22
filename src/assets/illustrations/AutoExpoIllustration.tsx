interface IllustrationProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export const AutoExpoIllustration = ({ className = '', 'aria-hidden': ariaHidden = true }: IllustrationProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
  >
    {/* Car body */}
    <path d="M 40 120 L 60 95 L 140 95 L 160 120 L 160 140 L 40 140 Z" fill="currentColor" opacity="0.2" />
    <path d="M 60 95 L 75 80 L 125 80 L 140 95" fill="currentColor" opacity="0.15" />
    
    {/* Windows */}
    <path d="M 65 95 L 77 82 L 95 82 L 95 95 Z" fill="currentColor" opacity="0.3" />
    <path d="M 105 95 L 105 82 L 123 82 L 135 95 Z" fill="currentColor" opacity="0.3" />
    
    {/* Wheels */}
    <circle cx="70" cy="140" r="18" fill="currentColor" opacity="0.25" />
    <circle cx="70" cy="140" r="10" fill="currentColor" opacity="0.35" />
    <circle cx="130" cy="140" r="18" fill="currentColor" opacity="0.25" />
    <circle cx="130" cy="140" r="10" fill="currentColor" opacity="0.35" />
    
    {/* Headlights */}
    <circle cx="45" cy="125" r="4" fill="currentColor" opacity="0.4" />
    <circle cx="155" cy="125" r="4" fill="currentColor" opacity="0.4" />
    
    {/* Door handle */}
    <rect x="95" y="110" width="10" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
    
    {/* Innovation elements - gears */}
    <circle cx="165" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    <line x1="165" y1="48" x2="165" y2="52" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    <line x1="165" y1="68" x2="165" y2="72" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    <line x1="153" y1="60" x2="157" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    <line x1="173" y1="60" x2="177" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    
    {/* Electric/eco symbol */}
    <path d="M 30 70 L 20 85 L 27 85 L 17 105 L 35 85 L 28 85 Z" fill="currentColor" opacity="0.2" />
    
    {/* Speed lines */}
    <line x1="25" y1="100" x2="35" y2="100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.15" />
    <line x1="20" y1="110" x2="35" y2="110" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.15" />
    <line x1="25" y1="120" x2="35" y2="120" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.15" />
  </svg>
);
