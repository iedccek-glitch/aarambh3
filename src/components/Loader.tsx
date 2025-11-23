import { useEffect, useState } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start page reveal animation
    const revealTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 1500);

    // Hide loader after animation completes
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className={`fixed inset-0 z-[9999] flex items-center justify-center loader-container ${isAnimating ? 'loader-exit' : ''}`}>
        <div className={`absolute inset-0 bg-black loader-bg ${isAnimating ? 'bg-exit' : ''}`} />
        <svg
          id="loader-svg"
          width="288"
          height="220"
          viewBox="0 0 288 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`loader-svg relative z-10 ${isAnimating ? 'svg-fade' : ''}`}
        >
          <path
            d="M126 50.0438L125.497 50.3319L43 97.5438V194.549L42.4902 194.835L2.49023 217.335L1 218.174V73.3847L1.50293 73.0966L124.503 2.59657L126 1.73817V50.0438ZM127.866 97.4638L140.866 119.964L141.146 120.45L140.878 120.942L128.411 143.797L155.85 187.935L156.167 188.446L155.865 188.966L146.865 204.466L146.032 205.9L145.152 204.494L118.52 161.931L98.8779 197.942L98.5938 198.464H70.3047L71.125 196.98L103.642 138.151L89.1523 114.994L88.1943 113.464H109.556L109.85 113.935L113.649 120.05L126.125 97.4804L126.98 95.9315L127.866 97.4638ZM146.875 62.4794L177.641 118.023L180.147 113.94L180.44 113.464H202.287L201.353 114.987L188.006 136.736L221.375 196.979L222.197 198.464H194.412L194.126 197.95L173.359 160.603L160.853 180.987L160.021 182.342L159.16 181.006L149.16 165.506L148.818 164.977L149.147 164.44L162.972 141.921L132.126 86.4501L131.854 85.9599L132.13 85.4716L145.13 62.4716L146.009 60.9159L146.875 62.4794ZM287 217.192L285.502 216.331L245.502 193.331L245 193.042V97.0468L162.507 50.3339L162 50.0468V1.73232L163.5 2.59755L286.5 73.5975L287 73.8866V217.192Z"
            stroke="#66a942"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <style>{`
          .loader-bg {
            transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
          }

          .bg-exit {
            clip-path: circle(0% at 50% 50%);
          }

          .loader-svg path {
            stroke-dasharray: 1984;
            stroke-dashoffset: 1984;
            animation: draw 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }

          .svg-fade {
            animation: logoFade 0.7s ease-out forwards;
          }

          @keyframes draw {
            from {
              stroke-dashoffset: 1984;
            }
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes logoFade {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Loader;
