import React from 'react';
import TaskService from "../services/Task.service.ts";
import TaskModel from "../models/Task.model.ts";

const useTasksHook = () => {
    const [tasks, setTasks] = React.useState<TaskModel[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<any>(null);

    React.useEffect(() => {
        (async () => {
              await getTasks();
        })()
    }, []);

    const getTasks = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const tasks: TaskModel[] = await TaskService.findAllTasks();
            setTasks(tasks || []);
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    return {tasks, isLoading, error, setTasks}
}

export default useTasksHook;