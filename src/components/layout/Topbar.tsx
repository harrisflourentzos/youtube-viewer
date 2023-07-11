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
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState, KeyboardEvent } from "react";

type Props = {
  isSidebarOpen: boolean;
  menuIconOnClick: (state: boolean) => void;
};

const Topbar = ({ isSidebarOpen, menuIconOnClick }: Props) => {
  const themeState = useSelector((state) => state.theme.theme);
  const [searchTerm, setSearchTerm] = useState<string>();

  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();

  function toggleThemeHandler() {
    dispatch(updateTheme(themeState === "dark" ? "light" : "dark"));
  }

  function onSearchHandler() {
    if (!searchTerm || searchTerm === "") return;

    navigate(`/search/${searchTerm}`);
  }

  function inputChangedHandler(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.preventDefault();

    setSearchTerm(e.target.value);
  }

  function haldleEnterKeyDown(
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (e.key === "Enter") onSearchHandler();
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
          <FlexBetween
            sx={{ backgroundColor: theme.palette.background.alt }}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase
              placeholder="Search..."
              onChange={inputChangedHandler}
              onKeyDown={haldleEnterKeyDown}
            />
            <IconButton onClick={onSearchHandler}>
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
