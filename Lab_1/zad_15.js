function howManyTimes(time1, time2) {
    let current = new Date(time1).getTime();
    let end = new Date(time2).getTime();
    let count = 0;
    while (current < end) {
        let date = new Date(current);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let maxStrikes = (hours % 12 === 0) ? 12 : hours % 12;
        if (minutes === 0 && seconds >= 0 && seconds < maxStrikes) {
            count++;
        }
        else if (minutes === 30 && seconds === 0) {
            count++;
        }
        current += 1000;
    }
    return count;
}