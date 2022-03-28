import axios from "axios";
import { puclic } from "../urls/index";

export const fetchPublic = () => {
  return axios
    .get(puclic)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
