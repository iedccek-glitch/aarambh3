import { memo } from 'react';

/**
 * RibbonDivider - Infinite marquee divider with AARAMBH wordmark
 * 
 * Features:
 * - Seamless infinite scroll using dual rows
 * - Hardware-accelerated transforms only
 * - Respects prefers-reduced-motion
 * - Taped ribbon aesthetic with clip-path
 */
export const RibbonDivider = memo(() => {
  // Number of logos to display (6 provides smooth coverage)
  const logoCount = 6;

  return (
    <div className="ribbon-divider" aria-hidden="true">
      <div className="ribbon-track">
        {/* First row - primary animation */}
        <div className="ribbon-row">
          {[...Array(logoCount)].map((_, i) => (
            <img
              key={`primary-${i}`}
              className="ribbon-logo"
              src="/assets/aarambh-wordmark.svg"
              alt=""
              loading="lazy"
            />
          ))}
        </div>
        
        {/* Second row - seamless loop duplicate */}
        <div className="ribbon-row" aria-hidden="true">
          {[...Array(logoCount)].map((_, i) => (
            <img
              key={`duplicate-${i}`}
              className="ribbon-logo"
              src="/assets/aarambh-wordmark.svg"
              alt=""
              loading="lazy"
            />
          ))}
        </div>
      </div>
      
      {/* Subtle edge highlights for depth */}
      <div className="ribbon-highlight ribbon-highlight-top" aria-hidden="true" />
      <div className="ribbon-highlight ribbon-highlight-bottom" aria-hidden="true" />
    </div>
  );
});

RibbonDivider.displayName = 'RibbonDivider';
