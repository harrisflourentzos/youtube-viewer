import axios from "axios";
import { VideosResponse } from "../model/api/video-types";
import { CommentThreadsResponse } from "../model/api/comment-types";
import { SearchResultResponse } from "../model/api/search-types";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

async function fetchData<T>(url: string, params: any) {
  const fullUrl = `${BASE_URL}/${url}`;

  const response = await axios.get<T>(fullUrl, { params: params });

  return response.data;
}

export async function search(searchTerm: string) {
  const params = {
    part: "snippet",
    key: process.env.REACT_APP_YOUTUBE_API_V3_KEY,
    q: searchTerm,
    type: "video",
  };

  const data = await fetchData<SearchResultResponse>("search", params);

  return data;
}

export async function getRelatedVideosById(videoId: string) {
  const params = {
    part: "snippet",
    relatedToVideoId: videoId,
    type: "video",
    key: process.env.REACT_APP_YOUTUBE_API_V3_KEY,
  };

  const data = await fetchData<SearchResultResponse>("search", params);

  return data.items;
}

export async function getVideoDetails(videoId: string) {
  const params = {
    part: "snippet,statistics",
    id: videoId,
    key: process.env.REACT_APP_YOUTUBE_API_V3_KEY,
  };

  const data = await fetchData<VideosResponse>("videos", params);

  return data.items[0];
}

export async function getVideoCommentThreadsById(videoId: string) {
  const params = {
    part: "snippet,replies",
    videoId: videoId,
    key: process.env.REACT_APP_YOUTUBE_API_V3_KEY,
  };

  const data = await fetchData<CommentThreadsResponse>(
    "commentThreads",
    params
  );

  return data.items;
}
