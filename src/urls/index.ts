const DEFAULT_API_LOCALHOST = "http://localhost:3001/api/v1";

export const tasksIndex = `${DEFAULT_API_LOCALHOST}/tasks`;
export const task = (taskId: string) =>
  `${DEFAULT_API_LOCALHOST}/tasks/${taskId}`;
