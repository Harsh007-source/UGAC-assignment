export const getTasks = () => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('tasks') || '[]');
};

export const saveTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const deleteTask = (id) => {
  const tasks = getTasks().filter((t) => t.id !== id);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const updateTask = (updatedTask) => {
  const tasks = getTasks().map((t) => (t.id === updatedTask.id ? updatedTask : t));
  localStorage.setItem('tasks', JSON.stringify(tasks));
};