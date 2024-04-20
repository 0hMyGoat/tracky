import React from 'react'
import ReactDOM from 'react-dom/client'
// Prime React
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import TasksPage from "./features/tasks/Tasks.page.tsx";
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <TasksPage />
    </PrimeReactProvider>
  </React.StrictMode>,
)
