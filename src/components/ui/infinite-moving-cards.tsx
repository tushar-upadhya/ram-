"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (scrollerRef.current && containerRef.current) {
      duplicateItems();
      applyStyles();
      setStart(true);
    }
  }, []);

  const duplicateItems = () => {
    const scroller = scrollerRef.current!;
    const items = Array.from(scroller.children);

    items.forEach((item) => {
      const clone = item.cloneNode(true);
      scroller.appendChild(clone);
    });
  };

  const applyStyles = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      const animationDirection = direction === "left" ? "normal" : "reverse";

      containerRef.current.style.setProperty("--animation-duration", duration);
      containerRef.current.style.setProperty(
        "--animation-direction",
        animationDirection
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden max-w-7xl mx-auto",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex gap-4 py-4 w-max animate-scroll",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="w-[350px] md:w-[450px] flex-shrink-0 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-6"
          >
            <blockquote className="text-gray-200">
              <p className="text-sm">{item.quote}</p>
              <footer className="mt-4 text-sm text-gray-400">
                <strong>{item.name}</strong>, {item.title}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-100% / 2));
            }
          }
          .animate-scroll {
            animation: scroll var(--animation-duration, 40s) linear infinite var(--animation-direction, normal);
          }
        `}
      </style>
    </div>
  );
};
