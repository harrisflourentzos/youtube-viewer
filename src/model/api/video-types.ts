import { YoutubeResponse } from "./youtube-response-types";

export interface VideosResponse
  extends YoutubeResponse<Video, "youtube#videoListResponse"> {
  prevPageToken: string;
}

export interface Video
  extends VideoSnippet,
    VideoContentDetails,
    VideoStatistics {
  kind: "youtube#video";
  etag: string;
  id: string;
}

interface VideoSnippet {
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
}

interface VideoContentDetails {
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: {
      allowed: string[];
      blocked: string[];
    };
    contentRating: {
      acbRating: string;
      agcomRating: string;
      anatelRating: string;
      bbfcRating: string;
      bfvcRating: string;
      bmukkRating: string;
      catvRating: string;
      catvfrRating: string;
      cbfcRating: string;
      cccRating: string;
      cceRating: string;
      chfilmRating: string;
      chvrsRating: string;
      cicfRating: string;
      cnaRating: string;
      cncRating: string;
      csaRating: string;
      cscfRating: string;
      czfilmRating: string;
      djctqRating: string;
      djctqRatingReasons: string[];
      ecbmctRating: string;
      eefilmRating: string;
      egfilmRating: string;
      eirinRating: string;
      fcbmRating: string;
      fcoRating: string;
      fmocRating: string;
      fpbRating: string;
      fpbRatingReasons: string[];
      fskRating: string;
      grfilmRating: string;
      icaaRating: string;
      ifcoRating: string;
      ilfilmRating: string;
      incaaRating: string;
      kfcbRating: string;
      kijkwijzerRating: string;
      kmrbRating: string;
      lsfRating: string;
      mccaaRating: string;
      mccypRating: string;
      mcstRating: string;
      mdaRating: string;
      medietilsynetRating: string;
      mekuRating: string;
      mibacRating: string;
      mocRating: string;
      moctwRating: string;
      mpaaRating: string;
      mpaatRating: string;
      mtrcbRating: string;
      nbcRating: string;
      nbcplRating: string;
      nfrcRating: string;
      nfvcbRating: string;
      nkclvRating: string;
      oflcRating: string;
      pefilmRating: string;
      rcnofRating: string;
      resorteviolenciaRating: string;
      rtcRating: string;
      rteRating: string;
      russiaRating: string;
      skfilmRating: string;
      smaisRating: string;
      smsaRating: string;
      tvpgRating: string;
      ytRating: string;
    };
    projection: string;
    hasCustomThumbnail: boolean;
  };
}

interface VideoStatus {
  uploadStatus: string;
  failureReason: string;
  rejectionReason: string;
  privacyStatus: string;
  publishAt: string;
  license: string;
  embeddable: boolean;
  publicStatsViewable: boolean;
  madeForKids: boolean;
  selfDeclaredMadeForKids: boolean;
}

interface VideoStatistics {
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

interface VideoPlayer {
  embedHtml: string;
  embedHeight: number;
  embedWidth: number;
}

interface TopicDetails {
  topicIds: string[];
  relevantTopicIds: string[];
  topicCategories: string[];
}

interface RecordingDetails {
  recordingDate: string;
}

interface VideoStream {
  widthPixels: number;
  heightPixels: number;
  frameRateFps: number;
  aspectRatio: number;
  codec: string;
  bitrateBps: number;
  rotation: string;
  vendor: string;
}

interface AudioStream {
  channelCount: number;
  codec: string;
  bitrateBps: number;
  vendor: string;
}

interface FileDetails {
  fileName: string;
  fileSize: number;
  fileType: string;
  container: string;
  videoStreams: VideoStream[];
  audioStreams: AudioStream[];
  durationMs: number;
  bitrateBps: number;
  creationTime: string;
}

interface ProcessingProgress {
  partsTotal: number;
  partsProcessed: number;
  timeLeftMs: number;
}

interface ProcessingDetails {
  processingStatus: string;
  processingProgress: ProcessingProgress;
  processingFailureReason: string;
  fileDetailsAvailability: string;
  processingIssuesAvailability: string;
  tagSuggestionsAvailability: string;
  editorSuggestionsAvailability: string;
  thumbnailsAvailability: string;
}

interface TagSuggestion {
  tag: string;
  categoryRestricts: string[];
}

interface VideoSuggestions {
  processingErrors: string[];
  processingWarnings: string[];
  processingHints: string[];
  tagSuggestions: TagSuggestion[];
  editorSuggestions: string[];
}

interface LiveStreamingDetails {
  actualStartTime: string;
  actualEndTime: string;
  scheduledStartTime: string;
  scheduledEndTime: string;
  concurrentViewers: number;
  activeLiveChatId: string;
}

interface Localization {
  title: string;
  description: string;
}

interface Localizations {
  [key: string]: Localization;
}
