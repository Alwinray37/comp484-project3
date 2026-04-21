// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---

// Task 8: Creates a timestamp span and appends it inside status-output
function createTimestamp() {
    const span = document.createElement("span");
    span.innerHTML = new Date().toLocaleTimeString();
    statusOutput.appendChild(span);
}

// Task 5: Toggles visibility of status-output using classList
// Task 6: e.preventDefault() stops the anchor from jumping/refreshing the page
// Task 7: Changes mainTitle background color based on visibility
// Task 8: Calls createTimestamp only when status-output becomes visible
function toggleStatus(e) {
    e.preventDefault();
    statusOutput.classList.toggle("hidden");

    if (!statusOutput.classList.contains("hidden")) {
        mainTitle.style.backgroundColor = "yellow";
        createTimestamp();
    } else {
        mainTitle.style.backgroundColor = "";
    }
}

// Bind the toggleStatus function to the toggleButton click event
toggleButton.addEventListener('click', (e) => {
    toggleStatus(e);
});

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---

// Selects all list items and sets their text color to blue
function highlightListItems() {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.style.color = "blue";
    });
}

// Call the function to apply the changes on page load
highlightListItems();

/* ======================================= */
// --- Task 10: Timed Animation ---

// Toggles the .hidden class on control-panel every 500ms
// updating to 1000 so its easier to dblClick
function startFlashing() {
    if (intervalId) return;
    intervalId = setInterval(() => {
        controlPanel.classList.toggle("hidden");
    }, 1000);
}

// Stops the flashing and resets control-panel visibility
function stopFlashing() {
    clearInterval(intervalId);
    intervalId = null;
    controlPanel.classList.remove("hidden");
}

// Bind startFlashing to single click, stopFlashing to double click
timerButton.addEventListener('click', startFlashing);
timerButton.addEventListener('dblclick', stopFlashing);
