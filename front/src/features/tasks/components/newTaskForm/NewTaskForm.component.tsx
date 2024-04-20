import { InputText } from "primereact/inputtext";

function NewTaskForm(props: { newTask: any, onChange: (e: any) => any }) {
  return <>
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