function solve() {
    let hoursEnd = 23;
    let minutesEnd = 59;


    for (let hours = 0; hours <= hoursEnd; hours++) {

        let output = `${hours}:`;

        for (let minutes = 0; minutes <= minutesEnd; minutes++) {
           
            if (minutes < 10) {

                output = `${hours}:0${minutes}`;
            } else  if(minutes > 10){
                output = `${hours}:${minutes}`;
            }
            console.log(`${output}`);
        }
    }

}

solve();