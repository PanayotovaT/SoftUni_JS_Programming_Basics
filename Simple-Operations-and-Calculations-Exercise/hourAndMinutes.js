function solve(hour, minutes){

    hour = Number(hour);
    minutes = Number(minutes);
    minutes = minutes + 15;

    if (minutes >= 60) {
        hour = hour + 1;
        minutes = minutes - 60;

    }
    if(hour === 24){
        hour = 0;
    }

    if(minutes < 10){
        console.log(`${hour}:0${minutes}`);
    } else{
    console.log(`${hour}:${minutes}`);
    }

}

solve("12", "49");