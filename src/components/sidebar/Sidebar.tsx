import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "../FlexBetween";
import { ChevronLeft, YouTube } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "./SidebarItems";

type Props = {
  drawerWidth: any;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  isMobile: boolean;
};

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isMobile,
}: Props) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  function onSidebarItemClickHandler(path: string, state: any) {
    navigate(path, { state: state });
    setActive(path);
  }

  var sidebarItemsMain = sidebarItems.main.map((item) => (
    <SidebarItem
      key={item.text}
      title={item.text}
      icon={item.icon}
      path={item.path}
      isActive={active === item.path}
      onClick={onSidebarItemClickHandler}
    />
  ));

  var sidebarItemsExplore = sidebarItems.explore.map((item) => (
    <SidebarItem
      key={item.text}
      title={item.text}
      icon={item.icon}
      path={item.path}
      isActive={active === item.path}
      onClick={onSidebarItemClickHandler}
    />
  ));

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isMobile ? "2px" : 0,
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <YouTube sx={{ fontSize: "25px" }} />
                  <Typography variant="h4" fontWeight="bold">
                    Viewer
                  </Typography>
                </Box>
                {isMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>{sidebarItemsMain}</List>
            <Divider sx={{ my: 1 }} />
            <Typography
              ml={5}
              mt={2}
              variant="h4"
              color={theme.palette.secondary[100]}
            >
              Explore
            </Typography>
            <List>{sidebarItemsExplore}</List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
