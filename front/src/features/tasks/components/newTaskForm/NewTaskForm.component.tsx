import { InputText } from "primereact/inputtext";
import React from "react";

function NewTaskForm(props: { newTask: any, onChange: (e) => any }) {
  return <>
    <h1>Ajouter une tâche</h1>
    <div className="p-fluid">
      <div className="p-field">
        <label htmlFor="name">Nom</label>
        <InputText
          id="name"
          value={ props.newTask.name }
          onChange={ props.onChange }
        />
      </div>
    </div>
  </>;
}

export default NewTaskForm;