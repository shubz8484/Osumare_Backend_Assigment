let tasks = [];
let currentId = 1;

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks.find(task => task.id === id);

const createTask = (name) => {
  const task = { id: currentId++, name, completed: false };
  tasks.push(task);
  return task;
};

const updateTask = (id, updatedTask) => {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) return null;
  tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
  return tasks[taskIndex];
};

const deleteTask = (id) => {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) return null;
  tasks.splice(taskIndex, 1);
  return true;
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
