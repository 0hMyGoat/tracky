import taskService from "../../services/Task.service.ts";
import { Button } from "primereact/button";
import React, { useContext } from "react";
import { TasksContext } from "../../context/TasksContext.ts";

const DeleteTask = (task: Task) => {

  const {tasks, setTasks} = useContext(TasksContext);

  const deleteProduct = (task) => {
      taskService.deleteTask(task.id);
      setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <>
      <Button
        icon="pi pi-trash"
        rounded
        outlined
        severity="danger"
        onClick={ () => deleteProduct(task) }
      />
    </>
  );
};

export default DeleteTask;