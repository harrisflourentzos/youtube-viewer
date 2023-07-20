import {
  Home,
  SubscriptionsOutlined,
  HistoryOutlined,
  VideoLibraryOutlined,
  FlightTakeoff,
  Whatshot,
  Headphones,
  LiveTv,
} from "@mui/icons-material";

export type SidebarItem = { text: string; icon: JSX.Element; path: string };

export const sidebarItems: { [key: string]: SidebarItem[] } = {
  main: [
    {
      text: "Home",
      icon: <Home />,
      path: "/search/home",
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
  ],
  explore: [
    {
      text: "Travel",
      icon: <FlightTakeoff />,
      path: "/search/travel",
    },
    {
      text: "Music",
      icon: <Headphones />,
      path: "/search/music",
    },
    {
      text: "Anime",
      icon: <Whatshot />,
      path: "/search/anime",
    },
    {
      text: "Movies",
      icon: <LiveTv />,
      path: "/search/movies",
    },
  ],
};
