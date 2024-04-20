import React from 'react';
import useTasksHook from "./hooks/useTasks.hook.ts";
import TaskList from "./components/taskList/TaskList.component.tsx";
import { TasksContext } from "./context/TasksContext.ts";

const TasksPage = () => {
  const {tasks, isLoading, error, setTasks} = useTasksHook();

  return (
    <TasksContext.Provider value={ {tasks, setTasks} }>
        <TaskList
          isLoading={ isLoading }
          error={ error }
          setTasks={ setTasks }
        />
    </TasksContext.Provider>
  );
}

export default TasksPage;