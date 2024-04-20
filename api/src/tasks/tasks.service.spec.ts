import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

describe('TasksService', () => {
  let service: TasksService;
  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    findOneBy: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };
  let mockTasks: Task[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);

    mockTasks = [
      { id: 1, name: 'Task 1', completed: false },
      { id: 2, name: 'Task 2', completed: true },
    ];
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all tasks', async () => {
    mockRepository.find.mockResolvedValue(mockTasks);
    expect(await service.findAll()).toEqual(mockTasks);
  });

  it('should find one task', async () => {
    await service.findOne(1);
    expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
  });

  it('should create a task', async () => {
    const newTask = { name: 'Task 3', completed: false };
    await service.create(newTask);
    expect(mockRepository.save).toHaveBeenCalledWith(newTask);
  });

  it('should update a task', async () => {
    const updatedTask = { name: 'Task 1', completed: true };
    await service.update(1, updatedTask);
    expect(mockRepository.update).toHaveBeenCalledWith(1, updatedTask);
  });

  it('should remove a task', async () => {
    await service.remove(1);
    expect(mockRepository.delete).toHaveBeenCalledWith(1);
  });

  it('should complete a task', () => {
    service.completeTask(1);
    expect(mockRepository.update).toHaveBeenCalledWith(1, { completed: true });
  });

  it('should uncomplete a task', () => {
    service.uncompleteTask(1);
    expect(mockRepository.update).toHaveBeenCalledWith(1, { completed: false });
  });
});
