import React from "react";
import { TrendingUp, Wallet } from "lucide-react";
import Link from "next/link";

const Logo = ({ className = "", showIcon = true, size = "default" }) => {
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl md:text-3xl",
    large: "text-3xl md:text-4xl",
  };

  const iconSizes = {
    small: 20,
    default: 24,
    large: 28,
  };

  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      {showIcon && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-1.5 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-200 group-hover:scale-105">
            <Wallet 
              className="text-white" 
              size={iconSizes[size]}
            />
          </div>
        </div>
      )}
      <span
        className={`font-extrabold bg-black bg-clip-text text-transparent ${sizeClasses[size]} tracking-tight`}
      >
        Finance
      </span>
    </Link>
  );
};

export default Logo;

