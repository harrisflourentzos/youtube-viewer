export interface YoutubeResponse<Titems, Tkind extends string> {
  kind: Tkind;
  etag: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Titems[];
}
