"use client";

import { useState } from "react";

export default function Component({ route }: { route: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isHovered = hoveredIndex === 1;

  return (
    <div
      className="relative overflow-hidden h-10  cursor-pointer"
      onMouseEnter={() => setHoveredIndex(1)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <style jsx>{`
        @keyframes moveUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }

        @keyframes moveDown {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes moveUpReverse {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes moveDownReverse {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100%);
          }
        }

        .move-up {
          animation: moveUp 0.5s forwards;
        }

        .move-down {
          animation: moveDown 0.5s forwards;
        }

        .move-up-reverse {
          animation: moveUpReverse 0.5s forwards;
        }

        .move-down-reverse {
          animation: moveDownReverse 0.5s forwards;
        }
      `}</style>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? "move-up" : "move-up-reverse"
        }`}
      >
        {route}
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center  transition-all duration-300 ${
          isHovered ? "move-down" : "move-down-reverse"
        }`}
      >
        {route}
      </div>
    </div>
  );
}
