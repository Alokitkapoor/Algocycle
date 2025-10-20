document.addEventListener("DOMContentLoaded", () => {

  const addBtn = document.getElementById("addTaskBtn");
  const taskStack = document.getElementById("taskstack");
  const toggleBtn = document.getElementById("toggleTaskForm");
  const taskForm = document.getElementById("taskForm");

  // Toggle the form visibility
  toggleBtn.addEventListener("click", () => {
    taskForm.classList.toggle("visible");
  });

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function createTaskCard(task, index) {
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <div class="task-card-header">
        <h4>${task.title}</h4>
        <small>${new Date(task.deadline).toLocaleString()}</small>
      </div>
      <p class="task-note">${task.notes || "No additional notes."}</p>
      <button class="remove-task-btn">Done</button>
    `;

    // Event listener for removing the task
    card.querySelector(".remove-task-btn").addEventListener("click", () => {
      tasks.splice(index, 1);     // remove from array
      saveTasks();                // update localStorage
      renderTasks();              // re-render task stack
    });

    return card;
  }

  function renderTasks() {
    taskStack.innerHTML = "";
    const now = new Date();

    tasks.forEach(task => {
      const taskTime = new Date(task.deadline);
      if (taskTime <= now) {
        const card = createTaskCard(task);
        taskStack.appendChild(card);
      }
    });
  }

  addBtn.addEventListener("click", () => {
    const title = document.getElementById("taskTitle").value.trim();
    const notes = document.getElementById("taskNotes").value.trim();
    const deadline = document.getElementById("taskDeadline").value;

    if (!title || !deadline) {
      alert("Please enter both title and deadline!");
      return;
    }

    const task = { title, notes, deadline };
    tasks.push(task);
    saveTasks();
    renderTasks();

    alert("Task recorded successfully!");

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskNotes").value = "";
    document.getElementById("taskDeadline").value = "";
  });

  setInterval(renderTasks, 10000);
  renderTasks();
});
