
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute inset-1 bg-blue-600 rounded-full opacity-40"></div>
        <div className="absolute inset-2 bg-blue-700 rounded-full opacity-60"></div>
        <div className="absolute inset-3 bg-blue-800 rounded-full opacity-80"></div>
        <div className="absolute inset-4 bg-blue-900 rounded-full flex items-center justify-center">
          <span className={`text-xs font-bold ${variant === 'light' ? 'text-white' : 'text-white'}`}>OP</span>
        </div>
      </div>
      <span className={`font-bold text-lg ${variant === 'light' ? 'text-white' : 'text-gray-800'}`}>OpenProjects</span>
    </Link>
  );
};

export default Logo;
