let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");

function timer(seconds){
    const now = Date.now(); // the value is in milliseconds

    const then = now + (seconds * 1000);

    displayTimeLeft(seconds); // runs setInterval immediately without waiting elapsed time

    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0){  // setInterval does not know where to stop itself so we need to store interval in its own variable!
            clearInterval(countdown);
            return; 
        }

        displayTimeLeft(secondsLeft);

    }, 1000);
}

function displayTimeLeft(seconds){
    const mins = Math.floor(seconds / 60); // converts seconds to mins

    const remainderSecs = seconds % 60; // converts seconds to remaining seconds
    
    const display = `${mins}:${remainderSecs < 10 ? "0" : ""}${remainderSecs}`;

    document.title = display;

    timerDisplay.textContent = display;
} 

function displayEndTime(timestamp){
    const end = new Date(timestamp);

    const hour = end.getHours();

    const mins = end.getMinutes();

    endTimeDisplay.textContent = `Be Back At ${hour}:${mins < 10 ? "0" : ""}${mins}`;    
}

    



