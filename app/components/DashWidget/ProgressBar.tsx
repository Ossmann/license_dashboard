'use client'
import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
}

export default function ProgressBar({ value, max }: ProgressBarProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const percentage = Math.min((value / max) * 100, 100);

  // Linear interpolation from green (0%) to red (100%)
  const hue = 120 - (animatedPercentage * 1.2); // 120=green, 0=red

  useEffect(() => {
    // Animate width from 0 to the target percentage over 1 second
    let start: number | null = null;

    function animate(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      const progressPercent = Math.min((progress / 1000) * percentage, percentage);

      setAnimatedPercentage(progressPercent);

      if (progress < 1000) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [percentage]);

  return (
    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full transition-all"
        style={{
          width: `${animatedPercentage}%`,
          backgroundColor: `hsl(${hue}, 100%, 40%)`,
          transitionDuration: '0.9s',
        }}
      />
    </div>
  );
}
