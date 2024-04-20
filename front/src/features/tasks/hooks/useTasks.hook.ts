import React from 'react';
import TaskService from "../services/Task.service.ts";

const useTasksHook = () => {
    const [tasks, setTasks] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        (async () => {
            if ( !tasks.length ) {
              await getTasks();
            }
        })()
    }, []);

    const getTasks = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const tasks = await TaskService.findAllTasks();
            setTasks(tasks);
        } catch (e: never) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return {tasks, isLoading, error, setTasks}
}

export default useTasksHook;