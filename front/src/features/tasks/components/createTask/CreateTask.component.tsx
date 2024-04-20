import React from 'react';
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import DEFAULT_TASK from "../../constants/DEFAULT_TASK.ts";
import NewTaskForm from "../newTaskForm/NewTaskForm.component.tsx";
import { TasksContext } from "../../context/TasksContext.ts";
import TasksService from "../../../tasks/services/Task.service.ts";
import TaskModel from "../../models/Task.model.ts";

const CreateTask = () => {

  const [isDialogOpen, setDialogOpen] = React.useState<boolean>(false);
  const [newTask, setNewTask] = React.useState(DEFAULT_TASK);
  const {setTasks} = React.useContext(TasksContext);

  return (
    <>
      <Toolbar
        end={ <>
          <Button
            label="Ajouter une tâche"
            icon="pi pi-plus"
            className="p-button-raised p-button-rounded"
            onClick={ () => setDialogOpen(true) }
          />

        </> }
        style={ {
          minWidth: "50rem",
          maxWidth: "90rem",
          margin: "auto",
          marginTop: "2rem",
        } }
      />

      <Dialog
        visible={ isDialogOpen }
        header="Ajouter une tâche"
        onHide={ () => setDialogOpen(false) }
        footer={ <Button
          label="Ajouter"
          icon="pi pi-check"
          className="p-button-raised p-button-rounded"
          onClick={ () => {
            TasksService.createTask(newTask)
              .then((newTask: TaskModel) => {
                setTasks((tasks) => [...tasks, newTask]);
                setNewTask(DEFAULT_TASK);
                setDialogOpen(false);
              });
          } }
        /> }
      >
        <NewTaskForm
          newTask={ newTask }
          onChange={ (e) => setNewTask({...newTask, name: e.target.value}) }
        />
      </Dialog>
    </>
  );
};

export default CreateTask;