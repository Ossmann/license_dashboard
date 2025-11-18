export interface DashWidgetProps {
  maxAvailableLicenses: number;
  usedLicenses: number;
  appName: string;
  appIcon: string;
}

export const widgetData: DashWidgetProps[] = [
  {
    maxAvailableLicenses: 100,
    usedLicenses: 60,
    appName: "Monday.com",
    appIcon: "/Monday_logo.png",
  },
  {
    maxAvailableLicenses: 36,
    usedLicenses: 20,
    appName: "FormAssembly",
    appIcon: "/form_assembly.png",
  },
  {
    maxAvailableLicenses: 750,
    usedLicenses: 30,
    appName: "Jira",
    appIcon: "Jira_Logo.svg",
  },
  {
    maxAvailableLicenses: 120,
    usedLicenses: 80,
    appName: "Miro",
    appIcon: "/miro.png",
  },
  {
    maxAvailableLicenses: 120,
    usedLicenses: 80,
    appName: "Claude AI",
    appIcon: "/Claude_AI_logo.png",
  },
];