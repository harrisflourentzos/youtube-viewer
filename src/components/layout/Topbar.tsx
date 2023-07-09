import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import {
  DarkModeOutlined,
  LightModeOutlined,
  Search,
  SettingsOutlined,
  Menu,
  Person,
} from "@mui/icons-material";
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../../hooks/redux/redux-hooks";
import { updateTheme } from "../../store/redux/themeSlice";

type Props = {
  isSidebarOpen: boolean;
  menuIconOnClick: (state: boolean) => void;
};

const Topbar = ({ isSidebarOpen, menuIconOnClick }: Props) => {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme.theme);
  const theme = useTheme();

  function toggleThemeHandler() {
    dispatch(updateTheme(themeState === "dark" ? "light" : "dark"));
  }

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => menuIconOnClick(!isSidebarOpen)}>
            <Menu />
          </IconButton>
          <FlexBetween borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={toggleThemeHandler}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
          <IconButton>
            <Person sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
