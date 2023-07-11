import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Topbar from "../../components/layout/Topbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/sidebar/Sidebar";

type Props = {};

const Layout = (props: Props) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Topbar
          isSidebarOpen={isSidebarOpen}
          menuIconOnClick={setIsSidebarOpen}
        />
        <Box p={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
