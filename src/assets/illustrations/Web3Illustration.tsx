interface IllustrationProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export const Web3Illustration = ({ className = '', 'aria-hidden': ariaHidden = true }: IllustrationProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
  >
    {/* Blockchain blocks */}
    <rect x="30" y="80" width="35" height="35" rx="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
    <rect x="82.5" y="80" width="35" height="35" rx="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
    <rect x="135" y="80" width="35" height="35" rx="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
    
    {/* Chain links */}
    <line x1="65" y1="97.5" x2="82.5" y2="97.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
    <line x1="117.5" y1="97.5" x2="135" y2="97.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
    
    {/* Hash symbols in blocks */}
    <text x="40" y="105" fontSize="16" fill="currentColor" opacity="0.4" fontFamily="monospace">#</text>
    <text x="92" y="105" fontSize="16" fill="currentColor" opacity="0.4" fontFamily="monospace">#</text>
    <text x="145" y="105" fontSize="16" fill="currentColor" opacity="0.4" fontFamily="monospace">#</text>
    
    {/* Decentralized network nodes */}
    <circle cx="100" cy="40" r="8" fill="currentColor" opacity="0.3" />
    <circle cx="60" cy="55" r="6" fill="currentColor" opacity="0.25" />
    <circle cx="140" cy="55" r="6" fill="currentColor" opacity="0.25" />
    <circle cx="40" cy="145" r="6" fill="currentColor" opacity="0.25" />
    <circle cx="160" cy="145" r="6" fill="currentColor" opacity="0.25" />
    <circle cx="100" cy="160" r="8" fill="currentColor" opacity="0.3" />
    
    {/* Network connections */}
    <line x1="100" y1="48" x2="60" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
    <line x1="100" y1="48" x2="140" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
    <line x1="60" y1="61" x2="47.5" y2="80" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
    <line x1="140" y1="61" x2="152.5" y2="80" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
    <line x1="47.5" y1="115" x2="40" y2="139" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
    <line x1="152.5" y1="115" x2="160" y2="139" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
    <line x1="46" y1="145" x2="100" y2="152" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
    <line x1="154" y1="145" x2="100" y2="152" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
    
    {/* Cryptocurrency symbol */}
    <circle cx="100" cy="135" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.3" />
    <text x="92" y="145" fontSize="20" fill="currentColor" opacity="0.4" fontFamily="Arial" fontWeight="bold">Ξ</text>
    
    {/* Smart contract lines */}
    <line x1="175" y1="95" x2="185" y2="95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
    <line x1="175" y1="102" x2="190" y2="102" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
    <line x1="175" y1="109" x2="182" y2="109" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
  </svg>
);
