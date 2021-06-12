import axios from "axios";
import * as Config from "../constants/Config";

export default function callApi(endpoint, medthod = "GET", body) {
  return axios({
    method: medthod,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
