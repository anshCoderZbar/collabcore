import {
  DashboardIcon,
  BundleIcon,
  MessageIcon,
  CalanderIcon,
  InsightIcon,
  CampaignsIcon,
  MenuManagerIcon,
  CreateProjectIcon,
  CommentManagerIcon,
  FilesIcon,
} from "app/icons";

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
  {
    id: 6,
    name: "Campaigns",
    slug: "#",
    icon: <CampaignsIcon />,
  },
];

export const sidebarShortcuts = [
  {
    id: 1,
    name: "Create a project",
    slug: "#",
    icon: <CreateProjectIcon />,
  },
  {
    id: 1,
    name: "Comments Manager",
    slug: "#",
    icon: <CommentManagerIcon />,
  },
  {
    id: 1,
    name: "Team Manager",
    slug: "#",
    icon: <MenuManagerIcon />,
  },
  {
    id: 1,
    name: "Files",
    slug: "#",
    icon: <FilesIcon />,
  },
];
