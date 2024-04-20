import { createContext, Dispatch, SetStateAction } from 'react';
import TaskModel from "../models/Task.model.ts";

interface TasksContextProps {
  tasks: TaskModel[];
  setTasks: Dispatch<SetStateAction<TaskModel[]>>;
  isLoading: boolean;
}

export const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  setTasks: () => {},
  isLoading: false
});
