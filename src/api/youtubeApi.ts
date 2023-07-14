import axios from "axios";
import { VideosResponse } from "../model/api/video-types";
import { CommentThreadsResponse } from "../model/api/comment-types";
import { SearchResultResponse } from "../model/api/search-types";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

async function FetchData(url: string, params: any) {
  const fullUrl = `${BASE_URL}/${url}`;

  const response = await axios.get(fullUrl, { params: params });

  return response.data;
}

export async function Search(searchTerm: string) {
  const params = {
    part: "snippet",
    key: process.env.REACT_APP_YOUTUBE_API_V3_KEY,
    q: searchTerm,
    type: "video",
  };

  const data = (await FetchData("search", params)) as SearchResultResponse;

  return data;
}

export async function GetRelatedVideosById(videoId: string) {
  const params = {
    part: "snippet",
    relatedToVideoId: videoId,
    type: "video",
    key: process.env.REACT_APP_YOUTUBE_API_V3_KEY,
  };

  const data = (await FetchData("search", params)) as SearchResultResponse;

  return data.items;
}

export async function GetVideoDetails(videoId: string) {
  const params = {
    part: "snippet,statistics",
    id: videoId,
    key: process.env.REACT_APP_YOUTUBE_API_V3_KEY,
  };

  const data = (await FetchData("videos", params)) as VideosResponse;

  return data.items[0];
}

export async function GetVideoCommentThreadsById(videoId: string) {
  const params = {
    part: "snippet,replies",
    videoId: videoId,
    key: process.env.REACT_APP_YOUTUBE_API_V3_KEY,
  };

  const data = (await FetchData(
    "commentThreads",
    params
  )) as CommentThreadsResponse;

  return data.items;
}
