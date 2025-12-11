export interface DashWidgetProps {
  maxAvailableLicenses: number;
  usedLicenses: number;
  appName: string;
  appIcon: string;
  expiryDate: string;
  appUrl: string;
}

export const widgetData: DashWidgetProps[] = [
  {
    maxAvailableLicenses: 100,
    usedLicenses: 60,
    appName: "Monday.com",
    appIcon: "/Monday_logo.png",
    expiryDate: "24/12/2026",
    appUrl: "https://www.monday.com/",
  },
  {
    maxAvailableLicenses: 36,
    usedLicenses: 20,
    appName: "FormAssembly",
    appIcon: "/form_assembly.png",
    expiryDate: "24/12/2026",
    appUrl: "https://www.monday.com/",
  },
  {
    maxAvailableLicenses: 750,
    usedLicenses: 30,
    appName: "Jira",
    appIcon: "Jira_Logo.svg",
    expiryDate: "24/12/2026",
    appUrl: "https://www.monday.com/",
  },
  {
    maxAvailableLicenses: 120,
    usedLicenses: 80,
    appName: "Miro",
    appIcon: "/miro.png",
    expiryDate: "24/12/2026",
    appUrl: "https://www.monday.com/",
  },
  {
    maxAvailableLicenses: 120,
    usedLicenses: 80,
    appName: "Claude AI",
    appIcon: "/Claude_AI_logo.png",
    expiryDate: "24/12/2026",
    appUrl: "https://www.monday.com/",
  },
];