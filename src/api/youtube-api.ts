import axios from "axios";

const URL = "https://www.googleapis.com/youtube/v3/search";

export async function GetVideos(searchTerm: string) {
  const params = {
    part: "snippet",
    key: process.env.YOUTUBE_API_V3_KEY,
    q: searchTerm,
    type: "video",
  };

  const response = await axios.get(URL, { params: params });
  const responseOk =
    response && response.status === 200 && response.statusText === "OK";

  if (!responseOk) throw new Error(response.data || "Could not load videos");

  let data = await response.data;
  console.log(data);
  return data;
}
