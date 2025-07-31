function addTask() {
  const taskInput = document.getElementById("taskInput");
  const datetimeInput = document.getElementById("datetimeInput");

  const taskText = taskInput.value.trim();
  const taskTime = datetimeInput.value;

  if (!taskText || !taskTime) {
    alert("Please enter both task and date/time.");
    return;
  }

  const taskList = document.getElementById("taskList");

  
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  
  const taskDetails = document.createElement("div");
  taskDetails.className = "task-text incomplete";
  taskDetails.innerText = `${taskText} — ${new Date(taskTime).toLocaleString()}`;

  
  const iconContainer = document.createElement("div");

  const checkIcon = document.createElement("span");
  checkIcon.innerHTML = "✔️";
  checkIcon.className = "status-icon";
  checkIcon.title = "Mark as Complete";
  checkIcon.onclick = () => {
    taskDetails.classList.remove("incomplete");
    taskDetails.classList.add("completed");
  };

  const wrongIcon = document.createElement("span");
  wrongIcon.innerHTML = "❌";
  wrongIcon.className = "status-icon";
  wrongIcon.title = "Mark as Incomplete";
  wrongIcon.onclick = () => {
    taskDetails.classList.remove("completed");
    taskDetails.classList.add("incomplete");
  };

  iconContainer.appendChild(checkIcon);
  iconContainer.appendChild(wrongIcon);

  taskItem.appendChild(taskDetails);
  taskItem.appendChild(iconContainer);
  taskList.appendChild(taskItem);

  
  taskInput.value = "";
  datetimeInput.value = "";
}
