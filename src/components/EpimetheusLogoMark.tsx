import React from 'react';

/**
 * Epimetheus logomark — "e" letterform inscribed in a circle.
 */
export const EpimetheusLogoMark: React.FC<{
    size?: number;
    className?: string;
}> = ({ size = 18, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        {/* Outer circle */}
        <circle
            cx="50"
            cy="50"
            r="47"
            stroke="currentColor"
            strokeWidth="5"
        />

        {/*
          "e" letterform:
          - Horizontal mid-bar
          - Arc from mid-left, sweeping up and around, open on the right
        */}

        {/* Horizontal mid-bar */}
        <line
            x1="24" y1="50"
            x2="72" y2="50"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
        />

        {/* "e" arc — starts at mid-right, sweeps counter-clockwise around to bottom-right */}
        <path
            d="M 72 50
               A 26 26 0 1 0 66 71"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
);
