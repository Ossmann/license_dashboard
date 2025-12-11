import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { BsHourglassSplit as HourGlass } from "react-icons/bs";
import { LuExternalLink as LinkIcon } from "react-icons/lu";

interface LicenseWidgetProps {
  maxLicenses: number;
  usedLicenses: number;
  appName: string;
  appIcon: string;
  appUrl: string;
  expiryDate: string;
}

export default function LicenseWidget(props: LicenseWidgetProps) {
  const { maxLicenses, usedLicenses, appName, appIcon, appUrl, expiryDate } = props;
  const usagePercent = Math.min((usedLicenses / maxLicenses) * 100, 100);
  const [showExpiry, setShowExpiry] = useState(false);

  const toggleExpiry = () => {
    setShowExpiry(!showExpiry);
  };

  return (
    <div className="license-widget p-4 border rounded-md shadow-md flex flex-col items-center space-y-4">
      <div className="app-icon h-12">
        <img src={appIcon} alt={`${appName} icon`} className="h-10" />
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold">{appName}</h3>
        <p className="text-sm text-gray-600">
          {usedLicenses} / {maxLicenses} licenses used
        </p>
        <ProgressBar value={usedLicenses} max={maxLicenses} />
      </div>

      {/* Row of rectangular elements */}
      <div className="flex flex-row space-x-3">
        {/* Hourglass - shows expiry date dropdown */}
        <div 
          className="border rounded-md p-2 flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 cursor-pointer relative group"
          onClick={toggleExpiry}
        >
          <HourGlass className="text-gray-700 text-xl" />
          
          {/* Expiry date square with transition - opens BELOW */}
          <div 
            className={`absolute top-full left-1/2 transform -translate-x-1/2 bg-white border rounded-md shadow-lg p-3 text-xs min-w-[120px] text-center whitespace-nowrap z-10 transition-all duration-300 ease-in-out mt-1 ${
              showExpiry 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
            }`}
          >
            {expiryDate}
          </div>
          
          {/* Arrow pointer */}
          <div 
            className={`absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent transition-opacity duration-300 ${
              showExpiry ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* External Link Icon */}
        <a 
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-md p-2 flex items-center justify-center w-10 h-10 hover:bg-blue-200 cursor-pointer"
          aria-label={`Open ${appName} in new tab`}
        >
          <LinkIcon className="text-xl" />
        </a>
      </div>
    </div>
  );
}
