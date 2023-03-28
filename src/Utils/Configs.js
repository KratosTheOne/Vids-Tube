
export const YOUTUBE_VIDEO_LIST = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + process.env.REACT_APP_YOUTUBE_API;

export const VIDEO_CATEGORIES_LIST = "https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + process.env.REACT_APP_YOUTUBE_API;

export const YOUTUBE_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_COUNT = 25;

//console.log(process.env.REACT_APP_YOUTUBE_API);