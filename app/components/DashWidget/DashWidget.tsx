import React from 'react';
import ProgressBar from './ProgressBar'; 

interface LicenseWidgetProps {
  maxLicenses: number;
  usedLicenses: number;
  appName: string;
  appIcon: string;
}

export default function LicenseWidget(props: LicenseWidgetProps) {
  const { maxLicenses, usedLicenses, appName, appIcon } = props;
  const usagePercent = Math.min((usedLicenses / maxLicenses) * 100, 100);

return (
  <div className="license-widget p-4 border rounded-md shadow-md flex flex-col items-center space-y-4">
    <div className="app-icon h-12">
      <img src={appIcon} alt={`${appName} icon`} className=" h-10 " />
    </div>
    <div className="text-center">
      <h3 className="text-lg font-semibold">{appName}</h3>
      <p className="text-sm text-gray-600">
        {usedLicenses} / {maxLicenses} licenses used
      </p>
      <ProgressBar value={usedLicenses} max={maxLicenses} />
    </div>
  </div>
);

}