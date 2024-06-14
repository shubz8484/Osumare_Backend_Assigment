const Task = require('../models/taskmodel');

const getAllTasks = (req, res) => {
  res.json(Task.getAllTasks());
};

const getTaskById = (req, res) => {
  const task = Task.getTaskById(parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  res.json(task);
};

const createTask = (req, res) => {
  const task = Task.createTask(req.body.name);
  res.status(201).json(task);
};

const updateTask = (req, res) => {
  const updatedTask = Task.updateTask(parseInt(req.params.id), req.body);
  if (!updatedTask) return res.status(404).send('Task not found');
  res.json(updatedTask);
};

const deleteTask = (req, res) => {
  const isDeleted = Task.deleteTask(parseInt(req.params.id));
  if (!isDeleted) return res.status(404).send('Task not found');
  res.status(204).send();
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
