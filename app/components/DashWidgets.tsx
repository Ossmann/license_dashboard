'use client';

import { useState } from 'react';
import DashWidget from "./DashWidget/DashWidget";
import { widgetData } from "../data/data";

export default function DashWidgets() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter widgets by appName (case-insensitive)
  const filteredWidgets = widgetData.filter(widget =>
    widget.appName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search widgets by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {/* Widgets Grid */}
      <div className="grid grid-cols-4 gap-6">
        {filteredWidgets.map((widget, index) => (
          <DashWidget
            key={index}
            maxLicenses={widget.maxAvailableLicenses}
            usedLicenses={widget.usedLicenses}
            appName={widget.appName}
            appIcon={widget.appIcon}
            expiryDate={widget.expiryDate}
            appUrl={widget.appUrl}
          />
        ))}
      </div>
      
      {/* Optional: Show count */}
      {filteredWidgets.length !== widgetData.length && (
        <p className="text-sm text-gray-500">
          Showing {filteredWidgets.length} of {widgetData.length} widgets
        </p>
      )}
    </div>
  );
}
