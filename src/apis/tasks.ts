import axios from "axios";
import { tasksIndex } from "../urls/index";

export const fetchTasks = (token: string) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  return axios
    .get(tasksIndex, headers)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
