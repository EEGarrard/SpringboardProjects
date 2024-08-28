// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).

let oneTimeTasks = [];
let monitoringTaskId;

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
    oneTimeTasks.push({func, delay});
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
    for (let i = 0; i < oneTimeTasks.length; i++) {
        setTimeout(oneTimeTasks[i].func, oneTimeTasks[i].delay);
    }
    oneTimeTasks = []; // Clear the array after all tasks are run.
}


// Task 4: Start Monitoring Function
function startMonitoring ()
{
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
    monitoringTaskId = setInterval(function monitoring () {
        console.log("Monitoring...");
    }, 2000); // Adjust the interval as needed.
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
    clearInterval(monitoringTaskId); // Stop monitoring.
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
    let countdown = duration;
    let countdownIntervalId = setInterval(function () {
        console.log(countdown);
        countdown--;
        if (countdown === 0) {
            console.log("Liftoff!");
            clearInterval(countdownIntervalId); // Stop countdown.
        }
    }, 1000); // Adjust the interval as needed.   
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
    addOneTimeTask(function systemCheck () {
        console.log("System Check...");
    }, 3000); // Adjust the delay as needed.

    runOneTimeTasks();
    
    startMonitoring(); // Start monitoring.
    
    setTimeout(() => {
        stopMonitoring(); // Stop monitoring.
        startCountdown(30); // Start countdown.
    }, 5000); // Adjust the delay as needed.
    
}

scheduleMission(); // Starts the mission.
