const localhost: string = process.env.REACT_APP_DEFAULT_API_LOCALHOST || "";

export const puclic = `${localhost}/public`; // テスト用API
export const tasksIndex = `${localhost}/tasks`;
export const task = (taskId: string) => `${localhost}/tasks/${taskId}`;
