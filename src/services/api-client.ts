import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "84a70d10e7544116aa810fe1ae98532f",
  },
});
