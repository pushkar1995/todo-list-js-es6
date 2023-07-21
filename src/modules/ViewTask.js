import TrashIcon from '../images/TrashIcon.svg';

export default (tasks) => {
  const container = document.querySelector('.to-do-list');
  while (container.children[2]) {
    container.removeChild(container.children[2]);
  }

  // Sort tasks array based on index property
  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `
      <input class="check-box" type="checkbox" ${task.completed ? 'checked' : 'unchecked'}>
      <p class="description">${task.description}</p>
      <a class="delete-icon"><img class="delete-img" src="${TrashIcon}" alt="TrashIcon"></a>
      `;
    container.appendChild(listItem);
  });

  localStorage.setItem('toDoList', JSON.stringify(tasks));
};