interface IllustrationProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export const DesignIllustration = ({ className = '', 'aria-hidden': ariaHidden = true }: IllustrationProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
  >
    {/* Pencil */}
    <rect x="130" y="30" width="15" height="100" rx="2" fill="currentColor" opacity="0.3" transform="rotate(45 137.5 80)" />
    <polygon points="143,123 153,133 148,138" fill="currentColor" opacity="0.5" />
    <rect x="130" y="25" width="15" height="10" fill="currentColor" opacity="0.4" transform="rotate(45 137.5 30)" />
    
    {/* Ruler */}
    <rect x="40" y="50" width="80" height="10" rx="1" fill="currentColor" opacity="0.2" />
    <line x1="45" y1="50" x2="45" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="55" y1="50" x2="55" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="65" y1="50" x2="65" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="75" y1="50" x2="75" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="85" y1="50" x2="85" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="95" y1="50" x2="95" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="105" y1="50" x2="105" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="115" y1="50" x2="115" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    
    {/* Canvas/artboard */}
    <rect x="45" y="80" width="90" height="90" rx="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
    
    {/* Design elements on canvas */}
    <circle cx="70" cy="105" r="12" fill="currentColor" opacity="0.2" />
    <rect x="95" y="100" width="30" height="15" rx="2" fill="currentColor" opacity="0.25" />
    <polygon points="60,135 80,135 70,150" fill="currentColor" opacity="0.2" />
    <path d="M 95 140 Q 110 130 125 140 T 125 155" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.3" />
    
    {/* Color palette */}
    <circle cx="30" cy="120" r="8" fill="currentColor" opacity="0.4" />
    <circle cx="30" cy="140" r="8" fill="currentColor" opacity="0.3" />
    <circle cx="30" cy="160" r="8" fill="currentColor" opacity="0.2" />
  </svg>
);
