    const createBtn = document.querySelector('.task-header button');
    const taskForm = document.querySelector('.task-form');
    const addTaskBtn = taskForm.querySelector('button'); // assuming this is the 'Add Task' button

    // Show/hide form when clicking "Create Task"
    createBtn.addEventListener('click', () => {
      taskForm.classList.toggle('show');
    });

    // Collapse form after adding task
    addTaskBtn.addEventListener('click', (e) => {
      e.preventDefault(); // prevent default form submission
      // You can add your task creation logic here

      // Hide the form
      taskForm.classList.remove('show');
    });

    