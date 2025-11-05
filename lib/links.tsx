import {
  ArrowLeftRight,
  BarChart3,
  Briefcase,
  ChartSpline,
  FilePlusCorner,
  Files,
  Target,
} from "lucide-react";

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

export const cards = [
  {
    Icon: Briefcase,
    title: "8-Second Add",
    desc: "Position → Company → Location. Done.",
  },
  {
    Icon: ArrowLeftRight,
    title: "Switch Status",
    desc: "Pending / Interview / Declined.",
  },
  {
    Icon: BarChart3,
    title: "Live Streak",
    desc: "Monthly chart updates as you add more jobs.",
  },
];
