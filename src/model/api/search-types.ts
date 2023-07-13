import { YoutubeResponse } from "./youtube-response-types";

export interface SearchResultResponse
  extends YoutubeResponse<SearchResult, "youtube#searchListResponse"> {
  prevPageToken: string;
}

export interface SearchResult extends SearchResultSnippet {
  kind: "youtube#searchResult";
  etag: string;
  id: SearchResultId;
}

interface SearchResultId {
  kind: string;
  videoId: string;
  channelId: string;
  playlistId: string;
}

interface SearchResultSnippet {
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: Thumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
  };
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
