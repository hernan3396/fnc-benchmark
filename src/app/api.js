import Axios from "axios";

export default Axios.create({
  baseURL: "https://graph.facebook.com/v8.0/",
});
