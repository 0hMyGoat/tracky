import { useContext } from 'react';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DeleteTask from "../deleteTask/DeleteTask.component.tsx";
import CheckTask from "../checkTask/CheckTask.component.tsx";
import { TasksContext } from "../../context/TasksContext.ts";

const TaskList = () => {

  const {tasks} = useContext(TasksContext);

  return (
    <>
      <DataTable
        value={ tasks }
        tableStyle={{
          minWidth: "50rem",
          maxWidth: "90rem",
          margin: "auto",
          marginTop: "2rem",
        }}
      >
        <Column
          body={ CheckTask }
          field="completed"
          header="Complété"
          style={ {
            width: '8rem'
        } }
        />
        <Column
          field="name"
          header="Nom"
        />
        <Column
          body={ DeleteTask }
          exportable={ false }
          style={ {
            justifySelf: "end",
            width: '8rem'
        } }
        />
      </DataTable>
    </>
  );
};

export default TaskList;