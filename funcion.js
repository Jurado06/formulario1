const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');


const addTask = (task) => {
  const newTask = document.createElement('li');
  newTask.textContent = task;
  newTask.id = `task-${list.children.length + 1}`;
  newTask.appendChild(createDeleteButton());
  list.appendChild(newTask);
  input.value = '';
};


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    addTask(input.value);
  }
});