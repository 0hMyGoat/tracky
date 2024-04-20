import { Checkbox } from "primereact/checkbox";
import taskService from "../../services/Task.service.ts";
import React, { useContext } from "react";
import { TasksContext } from "../../context/TasksContext.ts";

const CheckTask = (task: Task) => {

  const {tasks, setTasks} = useContext(TasksContext);

  const onChange = (e) => {
    if (e.checked) {
      taskService.completeTask(task.id);
    } else {
      taskService.uncompleteTask(task.id);
    }
    task.completed = e.checked;
    setTasks([...tasks]);
  }

  return (
    <Checkbox
      checked={ task.completed || false }
      onChange={ (e) => {
        onChange(e);
      }}
    />
  );
}

export default CheckTask;