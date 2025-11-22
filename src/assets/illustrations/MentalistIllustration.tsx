interface IllustrationProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export const MentalistIllustration = ({ className = '', 'aria-hidden': ariaHidden = true }: IllustrationProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
  >
    {/* Head silhouette */}
    <circle cx="100" cy="85" r="35" fill="currentColor" opacity="0.15" />
    
    {/* Brain waves/mental energy */}
    <path d="M 70 60 Q 75 50 80 60 T 90 60" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.4" />
    <path d="M 110 60 Q 115 50 120 60 T 130 60" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.4" />
    
    {/* Eyes with intensity */}
    <circle cx="85" cy="80" r="5" fill="currentColor" opacity="0.5" />
    <circle cx="115" cy="80" r="5" fill="currentColor" opacity="0.5" />
    <circle cx="85" cy="80" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="115" cy="80" r="2" fill="currentColor" opacity="0.8" />
    
    {/* Mysterious aura */}
    <circle cx="100" cy="85" r="45" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="5,5" />
    <circle cx="100" cy="85" r="55" stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeDasharray="8,8" />
    
    {/* Question marks floating */}
    <text x="45" y="100" fontSize="24" fill="currentColor" opacity="0.3" fontFamily="Arial">?</text>
    <text x="150" y="75" fontSize="20" fill="currentColor" opacity="0.25" fontFamily="Arial">?</text>
    <text x="140" y="120" fontSize="18" fill="currentColor" opacity="0.2" fontFamily="Arial">?</text>
    
    {/* Hypnotic spiral */}
    <circle cx="100" cy="150" r="25" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    <circle cx="100" cy="150" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    <circle cx="100" cy="150" r="15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <circle cx="100" cy="150" r="10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.35" />
    <circle cx="100" cy="150" r="5" fill="currentColor" opacity="0.4" />
    
    {/* Magic sparkles */}
    <path d="M 40 50 L 42 55 L 45 53 L 43 58 L 48 58 L 43 61 L 45 66 L 40 63 L 35 66 L 37 61 L 32 58 L 37 58 L 35 53 L 38 55 Z" fill="currentColor" opacity="0.3" />
    <path d="M 160 140 L 161.5 143 L 164 142 L 162.5 145 L 166 145 L 162.5 147 L 164 150 L 160 148 L 156 150 L 157.5 147 L 154 145 L 157.5 145 L 156 142 L 158.5 143 Z" fill="currentColor" opacity="0.25" />
  </svg>
);
