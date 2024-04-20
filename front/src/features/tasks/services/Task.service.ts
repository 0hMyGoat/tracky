import TaskRepository from "./Task.repository.ts";
import TaskModel from "../models/Task.model.ts";

class TaskService {

  async findAllTasks() {
    return await TaskRepository.findAll();
  }

  async createTask(task: TaskModel) {
    return await TaskRepository.create(task);
  }

  async completeTask(taskId: number) {
    return await TaskRepository.completeTask(taskId);
  }

  async uncompleteTask(taskId: number) {
    return await TaskRepository.uncompleteTask(taskId);
  }

  async deleteTask(taskId: number) {
    return await TaskRepository.deleteTask(taskId);
  }

}

export default new TaskService();