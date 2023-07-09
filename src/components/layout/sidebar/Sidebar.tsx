import {
  Box,
  Drawer,
  IconButton,
  List,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "../FlexBetween";
import { ChevronLeft, YouTube } from "@mui/icons-material";
import { sidebarItems } from "./SidebarItems";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";

type Props = {
  drawerWidth: any;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  isNonMobile: boolean;
};

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}: Props) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  function onSidebarItemClickHandler(path: string) {
    navigate(path);
    setActive(path);
  }

  var items = sidebarItems.map((item) => (
    <SidebarItem
      title={item.text}
      icon={item.icon}
      path={item.path}
      isActive={active === item.text.toLowerCase()}
      onClick={onSidebarItemClickHandler}
    />
  ));

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
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
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>{items}</List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
