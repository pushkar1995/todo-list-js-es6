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

module.exports = addTask , removeTask;