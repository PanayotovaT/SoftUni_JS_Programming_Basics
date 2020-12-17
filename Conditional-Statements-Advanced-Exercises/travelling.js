function solve(budget, season) {
    budget = Number(budget);
    let destination = "";
    let type = "";
    let expenses = 0;

    if (budget <= 100){
        destination = "Bulgaria";
    } else if (budget <= 1000) {
        destination = "Balkans";
    } else {
        destination = "Europe"
    }

    if (destination === "Europe"){
        type = "Hotel";
        expenses = 0.90 * budget;
    }else if (destination === "Balkans"){
        if(season === "summer") {
            type = "Camp";
            expenses = 0.40 * budget;
        } else if (season === "winter") {
            type = "Hotel";
            expenses = 0.80 * budget;
        }
    } else if (destination === "Bulgaria") {
        if (season === "summer") {
            type = "Camp";
            expenses = 0.30 * budget;
        } else if (season === "winter") {
            type = "Hotel";
            expenses = 0.70 * budget;
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${(expenses).toFixed(2)}`);



}

solve("1500", "summer");