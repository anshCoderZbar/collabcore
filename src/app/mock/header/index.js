import {
  MenuBellIcon,
  MenuConnectedIcon,
  MenuUserIcon,
  MenuManagerIcon,
  MenuInviteIcon,
  MenuPaymentIcon,
  MenuPlanIcon,
  MenuSecurityIcon,
  MenuSupportIcon,
} from "app/icons";

export const MenuIcons = [
  {
    name: "View profile",
    slug: "#",
    icon: <MenuUserIcon />,
  },
  {
    name: "Connected Accounts",
    slug: "#",
    icon: <MenuConnectedIcon />,
  },
  {
    name: "Notifications",
    slug: "#",
    icon: <MenuBellIcon />,
    border_btm: true,
  },
  {
    name: "Team Manager",
    slug: "#",
    icon: <MenuManagerIcon />,
  },
  {
    name: "Invite Friends",
    slug: "#",
    icon: <MenuInviteIcon />,
    border_btm: true,
  },
  {
    name: "Payments",
    slug: "#",
    icon: <MenuPaymentIcon />,
  },
  {
    name: "Plan & Billing",
    slug: "#",
    icon: <MenuPlanIcon />,
  },
  {
    name: "Security",
    slug: "#",
    icon: <MenuSecurityIcon />,
  },
  {
    name: "Support",
    slug: "#",
    icon: <MenuSupportIcon />,
    border_btm: true,
  },
];
