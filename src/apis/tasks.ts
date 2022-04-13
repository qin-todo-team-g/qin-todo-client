import axios from "axios";
import { param } from "../components/Lane";
import { tasksIndex } from "../urls/index";

const headers = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const fetchTasks = (token: string) => {
  return axios
    .get(tasksIndex, headers(token))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};

export const createTask = (params: param, token: string) => {
  return axios
    .post(
      tasksIndex,
      {
        task_type: params.task_type,
        title: params.title,
        is_done: params.is_done,
        user_id: params.user_id,
      },
      headers(token)
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
