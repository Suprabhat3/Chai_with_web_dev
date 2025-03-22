document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const ongoingList = document.getElementById('ongoingList');
  const completedList = document.getElementById('completedList');
  
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function renderTasks() {
      ongoingList.innerHTML = '';
      completedList.innerHTML = '';
      
      tasks.forEach((task, index) => {
          const taskItem = document.createElement('li');
          taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
          taskItem.innerHTML = `
              <input type="checkbox" ${task.completed ? 'checked' : ''}>
              <span class="task-text">${task.text}</span>
              <button class="delete-btn">Delete</button>
          `;

          const checkbox = taskItem.querySelector('input');
          checkbox.addEventListener('change', () => toggleTask(index));
          
          const deleteBtn = taskItem.querySelector('.delete-btn');
          deleteBtn.addEventListener('click', () => deleteTask(index));
          
          if (task.completed) {
              completedList.appendChild(taskItem);
          } else {
              ongoingList.appendChild(taskItem);
          }
      });
  }

  function addTask(text) {
      if (text.trim()) {
          tasks.push({ text, completed: false });
          saveTasks();
          renderTasks();
          taskInput.value = '';
      } else {
          taskInput.classList.add('shake');
          setTimeout(() => taskInput.classList.remove('shake'), 300);
      }
  }

  function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
  }

  function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
  }

  addTaskBtn.addEventListener('click', () => addTask(taskInput.value));
  
  taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          addTask(taskInput.value);
      }
  });

  renderTasks();
});