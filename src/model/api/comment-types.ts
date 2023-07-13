import { YoutubeResponse } from "./youtube-response-types";

export interface CommentThreadsResponse
  extends YoutubeResponse<CommentThread, "youtube#commentThreadListResponse"> {}

export interface CommentThread extends CommentThreadSnippet, Replies {
  kind: "youtube#commentThread";
  etag: string;
  id: string;
}

interface CommentThreadSnippet {
  snippet: {
    channelId: string;
    videoId: string;
    topLevelComment: Comment;
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
}

interface Replies {
  replies: {
    comments: Comment[];
  };
}

export interface CommentsResponse
  extends YoutubeResponse<Comment, "youtube#commentListResponse"> {}

interface Comment extends CommentSnippet {
  kind: string;
  etag: string;
  id: string;
}

interface CommentSnippet {
  snippet: {
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: {
      value: string;
    };
    channelId: string;
    videoId: string;
    textDisplay: string;
    textOriginal: string;
    parentId: string;
    canRate: boolean;
    viewerRating: string;
    likeCount: number;
    moderationStatus: string;
    publishedAt: string;
    updatedAt: string;
  };
}
