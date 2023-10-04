import { DashboardIcon } from "app/icons";
import { BundleIcon } from "app/icons";
import { MessageIcon } from "app/icons";
import { CalanderIcon } from "app/icons";
import { InsightIcon } from "app/icons";

export const SidebarData = [
  {
    id: 1,
    name: "dashboard",
    slug: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    name: "projects",
    slug: "/projects",
    icon: <BundleIcon />,
  },
  {
    id: 3,
    name: "messages",
    slug: "/messages",
    icon: <MessageIcon />,
  },
  {
    id: 4,
    name: "calander",
    slug: "/calander",
    icon: <CalanderIcon />,
  },
  {
    id: 5,
    name: "insights",
    slug: "/insights",
    icon: <InsightIcon />,
  },
];
