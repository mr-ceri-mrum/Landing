import React from 'react';

const Logo = ({ className = '', size = 'medium' }) => {
  const getSize = () => {
    switch (size) {
      case 'small':
        return 'h-8 w-8';
      case 'large':
        return 'h-16 w-16';
      case 'medium':
      default:
        return 'h-12 w-12';
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        className={getSize()}
        viewBox="0 0 600 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M320 140C320 140 372.5 90 425 140C477.5 190 545 245 475 320C405 395 425 470 425 470C425 470 372.5 520 320 470C267.5 420 200 365 270 290C340 215 320 140 320 140Z" fill="url(#gradient1)" />
        <path d="M280 140C280 140 227.5 90 175 140C122.5 190 55 245 125 320C195 395 175 470 175 470C175 470 227.5 520 280 470C332.5 420 400 365 330 290C260 215 280 140 280 140Z" fill="url(#gradient2)" />
        <path d="M300 220C300 220 227.5 197.5 175 257.5C122.5 317.5 122.5 407.5 212.5 407.5C302.5 407.5 302.5 317.5 302.5 317.5C302.5 317.5 375 340 427.5 280C480 220 480 130 390 130C300 130 300 220 300 220Z" fill="url(#gradient3)" />
        <defs>
          <linearGradient id="gradient1" x1="200" y1="140" x2="500" y2="470" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4CC9F0" />
            <stop offset="1" stopColor="#7209B7" />
          </linearGradient>
          <linearGradient id="gradient2" x1="400" y1="140" x2="100" y2="470" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4361EE" />
            <stop offset="1" stopColor="#F72585" />
          </linearGradient>
          <linearGradient id="gradient3" x1="175" y1="130" x2="427.5" y2="407.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3A0CA3" />
            <stop offset="1" stopColor="#7209B7" />
          </linearGradient>
        </defs>
      </svg>
      <span className="ml-2 text-xl font-bold">Open Inference</span>
    </div>
  );
};

export default Logo;
