import {
  Home,
  SubscriptionsOutlined,
  HistoryOutlined,
  VideoLibraryOutlined,
} from "@mui/icons-material";

export type SidebarItem = { text: string; icon: JSX.Element; path: string };

export const sidebarItems: SidebarItem[] = [
  {
    text: "Home",
    icon: <Home />,
    path: "/home",
  },
  {
    text: "Subscriptions",
    icon: <SubscriptionsOutlined />,
    path: "/subscriptions",
  },
  {
    text: "History",
    icon: <HistoryOutlined />,
    path: "/history",
  },
  {
    text: "Library",
    icon: <VideoLibraryOutlined />,
    path: "/library",
  },
];
