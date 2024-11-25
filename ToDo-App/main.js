const input = document.querySelector(".input-field input");
const addButton = document.querySelector(".input-field button");
const tasksField = document.querySelector(".tasks-field");
const tasksCounter = document.querySelector(".counters .tasks span");
const completedCounter = document.querySelector(".counters .completed span");

let tasksArr = JSON.parse(window.localStorage.getItem("tasks"));
let completedNum = 0;
let tasksNum = tasksArr.length;
tasksCounter.textContent = tasksNum;
if (tasksArr === null) tasksArr = [];
if (tasksArr.length === 0) {
  addEmptyPlaceHolder();
} else {
  tasksArr.forEach((task) => addTask(task));
  console.log(tasksArr);
}

addButton.addEventListener("click", function () {
  const taskText = input.value;
  const arrLen = tasksArr.length;
  tasksArr[arrLen] = { id: arrLen, text: taskText, completed: false };
  if (taskText !== "") {
    const emptyPlaceHOlderDiv = document.querySelector(".empty");
    if (emptyPlaceHOlderDiv !== null) emptyPlaceHOlderDiv.remove();
    addTask(tasksArr[arrLen]);
    input.value = "";
    input.blur();
    updateTasksCount(true);
  }
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addButton.click();
});

function addTask(task) {
  window.localStorage.setItem("tasks", JSON.stringify(tasksArr));
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  tasksField.appendChild(taskDiv);
  const taskText = document.createElement("p");
  taskText.textContent = task.text;
  if (task.completed) {
    taskText.classList.add("completed");
    updateCompletedCount(true);
  }
  taskText.addEventListener("click", function () {
    taskText.classList.toggle("completed");
    task.completed = !task.completed;
    if (task.completed) updateCompletedCount(true);
    else updateCompletedCount(false);
    window.localStorage.setItem("tasks", JSON.stringify(tasksArr));
  });
  taskDiv.appendChild(taskText);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", (e) => deleteTask(e));
  taskDiv.appendChild(deleteButton);
}

function deleteTask(e) {
  taskIndex = Array.from(tasksField.children).indexOf(e.target.parentElement);
  if (tasksArr[taskIndex].completed) updateCompletedCount(false);
  tasksArr = tasksArr.filter((task) => task.id !== taskIndex);
  tasksArr.forEach((task, index) => (task.id = index));
  window.localStorage.setItem("tasks", JSON.stringify(tasksArr));
  e.target.parentElement.remove();
  updateTasksCount(false);
  if (tasksArr.length === 0) {
    addEmptyPlaceHolder();
  }
}

function addEmptyPlaceHolder() {
  tasksField.innerHTML = "";
  const emptyPlaceHolder = document.createElement("div");
  emptyPlaceHolder.classList.add("empty");
  emptyPlaceHolder.textContent = "No Tasks To Show";
  tasksField.appendChild(emptyPlaceHolder);
}

function updateTasksCount(increase) {
  if (increase) tasksNum++;
  else tasksNum--;
  tasksCounter.textContent = tasksNum;
}

function updateCompletedCount(increase) {
  if (increase) completedNum++;
  else completedNum--;
  completedCounter.textContent = completedNum;
}
