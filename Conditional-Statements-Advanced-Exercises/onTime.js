function solve(examHour, examMinute, arrivalHour, arrivalMinute) {

    examHour = Number(examHour);
    examMinute = Number(examMinute);
    arrivalHour = Number(arrivalHour);
    arrivalMinute = Number(arrivalMinute);
    let hour = 0;
    let minute = 0;
    let examMinutes = examHour * 60 + examMinute;
    let arrivalMinutes = arrivalHour * 60 + arrivalMinute;
    let difference = examMinutes - arrivalMinutes;
    

    if (difference > 30) {
        console.log("Early");
        hour = Math.floor(difference / 60);
        minute = difference % 60;
        if(difference < 60){
            
            console.log(`${minute} minutes before the start`);
            
        } else if (difference >= 60) {
            if (minute < 10) {
                console.log(`${hour}:0${minute} hours before the start`);
            } else {
                console.log(`${hour}:${minute} hours before the start`)
            }
        }

    } else if (difference <= 30 && difference >= 0) {
        console.log("On time");
        hour = Math.floor(difference / 60);
        minute = difference % 60;
        if (difference > 0){
            console.log(`${minute} minutes before the start`);

        }

    } else if (arrivalMinutes - examMinutes > 0) {
        console.log("Late")
        if (Math.abs((arrivalMinutes - examMinutes)) < 60) {
            console.log(`${(arrivalMinutes - examMinutes)} minutes after the start`)
        } else if ((arrivalMinutes - examMinutes)  >= 60) {
            hour = Math.floor((arrivalMinutes - examMinutes) / 60)
            minute = (arrivalMinutes - examMinutes)  % 60;
            if (minute < 10) {
                console.log(`${hour}:0${minute} hours after the start`);
            } else {
                console.log(`${hour}:${minute.toFixed()} hours after the start`);
            }

        }
    }

}

solve("10",
"00",
"10",
"00")

;