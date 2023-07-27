const addTask = (taskDescription, arrayLength) => {
  const newTask = {
    description: taskDescription,
    completed: false,
    index: arrayLength,
  };

  return newTask;
};

const removeTask = (tasks, index) => {
  tasks.splice(index, 1);
  let i = index;
  while (i < tasks.length) {
    tasks[i].index = i;
    i += 1;
  }
};

// eslint-disable-next-line no-unused-expressions, no-sequences
module.exports = addTask, removeTask;