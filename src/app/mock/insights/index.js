import { PiEyeLight, PiUsersThree } from "react-icons/pi";
import { LuMousePointerClick } from "react-icons/lu";

export const InsightsCardData = [
  {
    id: 1,
    color: "#83c49a",
    bgColor: "#def5e6",
    heading: "Followers",
    numbers: "487,971",
    inc: "14%",
    icon: <PiUsersThree />,
  },
  {
    id: 2,
    color: "#e0f1f7",
    bgColor: "#9fd3fb",
    heading: "Following",
    numbers: "742",
    inc: "2%",
    icon: <PiUsersThree />,
  },
  {
    id: 3,
    color: "#feeed7",
    bgColor: "#eec893",
    heading: "Engagements",
    numbers: "4.7m",
    inc: "18%",
    icon: <PiEyeLight />,
  },
  {
    id: 4,
    color: "#dad2ff",
    bgColor: "#a49ada",
    heading: "Reach",
    numbers: "13.16m",
    dec: "6%",
    icon: <LuMousePointerClick />,
  },
];
