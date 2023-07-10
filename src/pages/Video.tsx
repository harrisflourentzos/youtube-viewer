import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const VideoPage = (props: Props) => {
  const params = useParams();
  const videoId = params.id;

  return <div>VideoScreen: {videoId}</div>;
};

export default VideoPage;
