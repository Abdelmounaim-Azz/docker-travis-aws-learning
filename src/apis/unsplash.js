import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID AQIJaE2AMtjzYzZS_Dcn6VARW3D_8YiD8-w5jpFYAoA",
  },
});
