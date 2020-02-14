// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskComplete.push(false);
//   taskDescription.push(description);
// }

function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " ": " not "}been completed`);
    },
    completeTask: function() {
      this.complete = true;
    }
  }
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box"); // task 0
const task2 = newTask("Do Laundry", ":("); // task 1
const tasks = [task1, task2]

task1.completeTask();
task1.logTaskState();
// console.log(tasks);

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed