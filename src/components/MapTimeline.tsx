import { useEffect, useRef, useState } from 'react';
import { Sparkle, Clock } from '@phosphor-icons/react';
import '../styles/map-timeline.css';

export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  venue: string;
  t: number; // Position along path [0..1]
  labelSide?: 'top' | 'bottom';
  icon?: 'flag' | 'pin' | 'star' | 'flag-banner';
}

interface MapTimelineProps {
  events: TimelineEvent[];
}

export const MapTimeline = ({ events }: MapTimelineProps) => {
  const [visibleNodes, setVisibleNodes] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setVisibleNodes(new Set(events.map(e => e.id)));
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nodeId = entry.target.getAttribute('data-event-id');
            if (nodeId) {
              setVisibleNodes((prev) => new Set([...prev, nodeId]));
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    const cards = containerRef.current?.querySelectorAll('.event-card-minimal');
    if (cards) {
      cards.forEach((card, index) => {
        setTimeout(() => {
          observerRef.current?.observe(card);
        }, index * 80);
      });
    }

    return () => observerRef.current?.disconnect();
  }, [events]);

  return (
    <div ref={containerRef} className="timeline-wrapper w-full max-w-md mx-auto">
      {/* Event Cards - Clean and Minimal */}
      <div className="space-y-6">
        {events.map((event, index) => {
          const isVisible = visibleNodes.has(event.id);

          return (
            <div
              key={event.id}
              data-event-id={event.id}
              className={`event-card-minimal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-4">
                {/* Premium Icon */}
                <div className="flex-shrink-0">
                  <Sparkle size={28} weight="fill" className="text-[var(--tl-node)]" />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Time */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <Clock size={14} weight="bold" className="text-[var(--tl-node)] flex-shrink-0" />
                    <span className="text-xs font-bold text-[var(--tl-node)] uppercase tracking-wider">
                      {event.time}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg mb-0.5 text-[var(--text-heading)] leading-tight">
                    {event.title}
                  </h3>

                  {/* Description */}
                  {event.description && (
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
