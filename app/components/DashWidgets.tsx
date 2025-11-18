import DashWidget from "./DashWidget/DashWidget";
import { widgetData } from "../data/data";

export default function DashWidgets() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {widgetData.map((widget, index) => (
        <DashWidget
          key={index}
          maxLicenses={widget.maxAvailableLicenses}
          usedLicenses={widget.usedLicenses}
          appName={widget.appName}
          appIcon={widget.appIcon}
        />
      ))}
    </div>
  );
}
