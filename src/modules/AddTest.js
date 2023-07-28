export const addTask = (taskDescription, arrayLength) => {
  const newTask = {
    description: taskDescription,
    completed: false,
    index: arrayLength,
  };

  return newTask;
};

export const removeTask = (tasks, index) => {
  tasks.splice(index, 1);
  let i = index;
  while (i < tasks.length) {
    tasks[i].index = i;
    i += 1;
  }
};

export const viewTask = (tasks) => {
  const container = document.querySelector('.to-do-list');
  while (container.children[2]) {
    container.removeChild(container.children[2]);
  }
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `
      <input class="check-box" type="checkbox" ${task.completed ? 'checked' : 'unchecked'}>
      <p class="description">${task.description}</p>
      `;
    container.appendChild(listItem);
  });

  localStorage.setItem('toDoList', JSON.stringify(tasks));
};