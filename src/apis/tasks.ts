import axios from "axios";
import { tasksIndex } from "../urls/index";

export const fetchTasks = () => {
  return axios
    .get(tasksIndex)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
