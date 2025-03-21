// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <div class="task-text">${taskText}</div>
                <div class="task-actions">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';

            const editBtn = taskItem.querySelector('.edit');
            const deleteBtn = taskItem.querySelector('.delete');
            const taskTextDiv = taskItem.querySelector('.task-text');

            editBtn.addEventListener('click', () => {
              const currentText = taskTextDiv.textContent;
              taskTextDiv.innerHTML = `<input type="text" class="editing" value="${currentText}"> <button class="save">Save</button> <button class="cancel">Cancel</button>`;
              const input = taskTextDiv.querySelector('.editing');
              const saveButton = taskTextDiv.querySelector('.save');
              const cancelButton = taskTextDiv.querySelector('.cancel');

              saveButton.addEventListener('click', () => {
                const newText = input.value.trim();
                if(newText){
                    taskTextDiv.textContent = newText;
                }
                else {
                    taskTextDiv.textContent = currentText;
                }
              });

              cancelButton.addEventListener('click', () => {
                taskTextDiv.textContent = currentText;
              });

            });

            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });
        }
    }
});// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <div class="task-text">${taskText}</div>
                <div class="task-actions">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';

            const editBtn = taskItem.querySelector('.edit');
            const deleteBtn = taskItem.querySelector('.delete');
            const taskTextDiv = taskItem.querySelector('.task-text');

            editBtn.addEventListener('click', () => {
              const currentText = taskTextDiv.textContent;
              taskTextDiv.innerHTML = `<input type="text" class="editing" value="${currentText}"> <button class="save">Save</button> <button class="cancel">Cancel</button>`;
              const input = taskTextDiv.querySelector('.editing');
              const saveButton = taskTextDiv.querySelector('.save');
              const cancelButton = taskTextDiv.querySelector('.cancel');

              saveButton.addEventListener('click', () => {
                const newText = input.value.trim();
                if(newText){
                    taskTextDiv.textContent = newText;
                }
                else {
                    taskTextDiv.textContent = currentText;
                }
              });

              cancelButton.addEventListener('click', () => {
                taskTextDiv.textContent = currentText;
              });

            });

            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });
        }
    }
});
