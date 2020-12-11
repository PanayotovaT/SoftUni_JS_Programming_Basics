function solve(seconds1, seconds2, seconds3){

    seconds1 = Number(seconds1);
    seconds2 = Number(seconds2);
    seconds3 = Number(seconds3);

    let totalTime = seconds1 + seconds2 + seconds3;

    
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else{

        console.log(`${minutes}:${seconds}`);
    }



    
}

solve("35", "45", "44");