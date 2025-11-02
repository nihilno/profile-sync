import { ChartSpline, FilePlusCorner, Files } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const links: NavLink[] = [
  {
    label: "Add job",
    href: "/add-job",
    icon: <FilePlusCorner />,
  },
  {
    label: "Jobs",
    href: "/jobs",
    icon: <Files />,
  },
  {
    label: "Stats",
    href: "/stats",
    icon: <ChartSpline />,
  },
];
