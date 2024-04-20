import TaskRepository from "./Task.repository.ts";

class TaskService {

  async findAllTasks() {
    return await TaskRepository.findAll();
  }

  async createTask(task) {
    return await TaskRepository.create(task);
  }

  async completeTask(taskId) {
    return await TaskRepository.completeTask(taskId);
  }

  async uncompleteTask(taskId) {
    return await TaskRepository.uncompleteTask(taskId);
  }

  async deleteTask(taskId) {
    return await TaskRepository.deleteTask(taskId);
  }

}

export default new TaskService();