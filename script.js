let countdown;

function timer(seconds){
    const now = Date.now(); // the value is in milliseconds

    const then = now + (seconds * 1000);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0){  // setInterval does not know where to stop itself so we need to store interval in its own variable!
            clearInterval(countdown);
            return; 
        }

        console.log(secondsLeft);

    }, 1000);
}

