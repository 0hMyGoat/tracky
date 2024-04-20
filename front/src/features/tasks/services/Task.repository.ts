import TaskModel from "../models/Task.model.ts";

class TaskRepository {
  private _url: string = process.env.NODE_ENV === "production"
      ? "/api/tasks"
      : 'http://localhost:3000/api/tasks';

  set url(url: string) {
      this._url = url;
  }

  get url(): string {
      return this._url;
  }

  /**
   * Get all the tasks
   */

  async findAll(): Promise<TaskModel[]> {
    const response = await fetch(this.url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }

  /**
   * Create a task
   * @param task
   */
  async create(task: TaskModel): Promise<TaskModel> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(task)
    });

    if (!response.ok) {
      throw new Error("Error while creating task");
    }

    return await response.json();
  }

  async completeTask(taskId: number): Promise<TaskModel> {
    const response = await fetch(this.url + "/" + taskId + '/complete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

    if (!response.ok) {
      throw new Error("Error while completing task");
    }

    return await response.json();
  }

  async uncompleteTask(taskId: number): Promise<TaskModel> {
    const response = await fetch(this.url + "/" + taskId + '/uncomplete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

    if (!response.ok) {
      throw new Error("Error while uncompleting task");
    }

    return await response.json();
  }

  async deleteTask(taskId: number): Promise<void> {
    const response = await fetch(this.url + "/" + taskId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

    if (!response.ok) {
      throw new Error("Error while deleting task");
    }
  }

}

const taskRepository = new TaskRepository();

export default taskRepository;