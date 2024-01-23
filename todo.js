document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <span class="delete-button" onclick="deleteTask(this)">Delete</span>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function deleteTask(element) {
        const listItem = element.closest('li');
        listItem.remove();
    }

    document.getElementById('app').addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            // Handle editing task (you can implement editing functionality here)
            console.log('Edit task:', event.target.textContent.trim());
        }
    });

    window.addTask = addTask;
    window.deleteTask = deleteTask;
});
