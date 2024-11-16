let input = document.querySelector(".input-text");
let btn = document.querySelector(".btn");
let container = document.querySelector(".container");

function creating_divs() {
    btn.addEventListener("click", function() {
        if (input.value.trim() !== "") {
            creating_task(input.value);
        }
    });
}

creating_divs();

function creating_task(taskText) {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    let box = document.createElement("div");
    box.classList.add("lists");
    box.textContent = taskText;

    let button = document.createElement("button");
    button.classList.add("clear-button");
    button.textContent = "Clear";

    // Add the button's event listener to remove the task
    button.addEventListener("click", function() {
        taskContainer.remove();
    });

    taskContainer.appendChild(box);
    taskContainer.appendChild(button);
    container.appendChild(taskContainer);
}
