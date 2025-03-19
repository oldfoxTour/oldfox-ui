import React from 'react';

export function ProgressCircle({ percentage, label, color = "blue" }) {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center">
      <svg width="100" height="100" className="transform -rotate-90">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#E2E8F0"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={`var(--${color}-500)`}
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="mt-2 text-center">
        <div className="text-2xl font-bold">{percentage}%</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
}

