function solve(fuel, lapFuel, lapNum) {

    fuel = Number(fuel);
    lapFuel = Number(lapFuel);
    lapNum = Number(lapNum);
    let fuelNeeded = 0;
    let lapCount = 0;

    for (let i = 1; i <= lapNum; i++) {
        fuelNeeded += lapFuel - 0.1;
        if (fuelNeeded > fuel) {
            console.log(`You are out of fuel in round ${lapCount}!`);
            break;
        }
        lapCount++;
        

    }

    if (fuelNeeded <= fuel) {
        console.log("Congrats! You won the race!");

    }
}

solve("50", "4.3", "30");