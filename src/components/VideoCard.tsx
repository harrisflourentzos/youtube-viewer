import { CheckCircle } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { SearchResult } from "../model/api/search-types";

type Props = { video: SearchResult };

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}: Props) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.alt,
        width: { xs: "100%", sm: "358px", md: "320px" },
      }}
    >
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent>
        <Link to={`/video/${videoId}`}>
          <Typography variant="h5" color={theme.palette.secondary[200]}>
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography variant="h6" color={theme.palette.secondary[100]}>
            {snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: "12px", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
