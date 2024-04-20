import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import taskService from "../../services/Task.service.ts";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext.ts";
import TaskModel from "../../models/Task.model.ts";

const CheckTask = (task: TaskModel) => {

  const {tasks, setTasks} = useContext(TasksContext);

  const onChange = (e: CheckboxChangeEvent) => {
    if (!task.id) return;
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
      onChange={ (e: CheckboxChangeEvent) => {
        onChange(e);
      }}
    />
  );
}

export default CheckTask;