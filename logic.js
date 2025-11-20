function startTime() {
    let startTime = new Date().getTime();
    let fiveMinutes = 1000 * 60 * 5;
    let endTime = startTime + fiveMinutes;

    setInterval(function() {
        let timeLeft = endTime - new Date().getTime();
        let minutes = timeLeft / (1000 * 60);
        minutes = Math.floor(minutes);
        let seconds = (timeLeft / 1000) % 60;
        seconds = Math.round(seconds);
        if(minutes == 0 && seconds == 0) {
            clearInterval(interval);
            timer.innerHTML = "00 : 00";
            return;
        }
        else {
            if(seconds < 10) {
                let text = '0' + minutes + " : 0" + seconds;
                timer.innerHTML = text;
            }
            else {
                let text = '0' + minutes + " : " + seconds;
                timer.innerHTML = text;
            }
        }
        

    }, 1000);
}