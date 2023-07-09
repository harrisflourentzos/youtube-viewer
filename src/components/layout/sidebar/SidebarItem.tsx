import { ChevronRightOutlined } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";

type Props = {
  title: string;
  icon: JSX.Element;
  path: string;
  isActive: boolean;
  onClick: (path: string) => void;
};

const SidebarItem = ({ title, icon, path, isActive, onClick }: Props) => {
  const theme = useTheme();

  return (
    <ListItem key={title} disablePadding>
      <ListItemButton
        onClick={() => onClick(path)}
        sx={{
          backgroundColor: isActive
            ? theme.palette.secondary[300]
            : "transparent",
          color: isActive
            ? theme.palette.primary[600]
            : theme.palette.secondary[100],
        }}
      >
        <ListItemIcon
          sx={{
            ml: "2rem",
            color: isActive
              ? theme.palette.primary[600]
              : theme.palette.secondary[200],
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
        {isActive && <ChevronRightOutlined sx={{ ml: "auto" }} />}
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
