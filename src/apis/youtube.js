import axios from "axios";

const KEY = "AIzaSyDP7qeT0oRCAHurp1mmf-JYtKDWr5IUWSM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
