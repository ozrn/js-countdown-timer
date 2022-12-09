let countdown;

function timer(seconds){
    const now = Date.now(); // the value is in milliseconds

    const then = now + (seconds * 1000);

    displayTimeLeft(seconds); // runs setInterval immediately without waiting elapsed time

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

    const remainderSecs = seconds % 60; // converts seconds to remaining secondsgit 

    console.log(mins, remainderSecs);

}

