import useTasksHook from "./hooks/useTasks.hook.ts";
import TaskList from "./components/taskList/TaskList.component.tsx";
import { TasksContext } from "./context/TasksContext.ts";
import CreateTask from "./components/createTask/CreateTask.component.tsx";
import banner from "../../assets/tracky-banner.png";

const TasksPage = () => {
  const {tasks, setTasks} = useTasksHook();

  return (

    <TasksContext.Provider value={ {tasks, setTasks} }>
        <img
          src={ banner }
          alt="logo"
          style={ {
            width: "30%",
            margin: "auto",
            display: "block",
          } }
        />
        <TaskList/>
        <CreateTask />
    </TasksContext.Provider>
  );
}

export default TasksPage;