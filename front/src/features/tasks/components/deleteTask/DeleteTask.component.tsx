import taskService from "../../services/Task.service.ts";
import { Button } from "primereact/button";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext.ts";
import TaskModel from "../../models/Task.model.ts";

const DeleteTask = (task: TaskModel) => {

  const {tasks, setTasks} = useContext(TasksContext);

  const deleteTask = (task: TaskModel) => {
    if (!task.id) return;
    taskService.deleteTask(task.id);
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <>
      <Button
        icon="pi pi-trash"
        rounded
        text
        severity="danger"
        onClick={ () => deleteTask(task) }
      />
    </>
  );
};

export default DeleteTask;