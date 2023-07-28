export const editTask = (tasks, index, newDescription) => {
  tasks[index].description = newDescription;
};

export const taskStatusUpdate = (tasks, index) => {
  tasks[index].completed = !tasks[index].completed;
};

export const clearCompleted = (tasks) => {
  tasks = tasks.filter((item) => item.completed === false);
  let i = 0;
  tasks.forEach((task) => {
    task.index = i;
    i += 1;
  });
  return tasks;
};