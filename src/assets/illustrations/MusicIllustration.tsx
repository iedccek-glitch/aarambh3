interface IllustrationProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export const MusicIllustration = ({ className = '', 'aria-hidden': ariaHidden = true }: IllustrationProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
  >
    {/* Musical notes */}
    <circle cx="60" cy="140" r="12" fill="currentColor" opacity="0.3" />
    <rect x="71" y="80" width="4" height="60" fill="currentColor" opacity="0.4" />
    <circle cx="73" cy="78" r="8" fill="currentColor" opacity="0.2" />
    
    <circle cx="100" cy="135" r="12" fill="currentColor" opacity="0.3" />
    <rect x="111" y="70" width="4" height="65" fill="currentColor" opacity="0.4" />
    <circle cx="113" cy="68" r="8" fill="currentColor" opacity="0.2" />
    
    {/* Microphone */}
    <ellipse cx="145" cy="65" rx="15" ry="20" fill="currentColor" opacity="0.25" />
    <rect x="140" y="85" width="10" height="50" fill="currentColor" opacity="0.2" />
    <rect x="135" y="135" width="20" height="5" rx="2" fill="currentColor" opacity="0.3" />
    <line x1="145" y1="140" x2="145" y2="155" stroke="currentColor" strokeWidth="3" opacity="0.3" />
    <ellipse cx="145" cy="157" rx="18" ry="5" fill="currentColor" opacity="0.2" />
    
    {/* Sound waves */}
    <path d="M 30 90 Q 35 80 40 90" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" />
    <path d="M 25 85 Q 35 70 45 85" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.15" />
    <path d="M 20 80 Q 35 60 50 80" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.1" />
    
    <path d="M 170 100 Q 175 90 180 100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" />
    <path d="M 165 95 Q 175 80 185 95" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.15" />
    <path d="M 160 90 Q 175 70 190 90" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.1" />
    
    {/* Stage/speaker */}
    <rect x="50" y="160" width="100" height="30" rx="3" fill="currentColor" opacity="0.15" />
    <circle cx="70" cy="175" r="8" fill="currentColor" opacity="0.25" />
    <circle cx="100" cy="175" r="8" fill="currentColor" opacity="0.25" />
    <circle cx="130" cy="175" r="8" fill="currentColor" opacity="0.25" />
  </svg>
);
