function solve(budget, season, fisherman) {
    budget = Number(budget);
    fisherman = Number(fisherman);

    let boatprice = 0;
    switch (season) {
        case "Spring":
            boatprice = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatprice = 4200;
            break;
        case "Winter":
            boatprice = 2600;
            break;
    }
    if (fisherman <= 6) {
        boatprice = 0.90 * boatprice;
    } else if (fisherman <= 11) {
        boatprice = 0.85 * boatprice;
    } else {
        boatprice = 0.75 * boatprice;
    }

    if (season != "Autumn" && (fisherman % 2 === 0)) {
        boatprice = 0.95 * boatprice;
    }

    if(budget >= boatprice) {
        console.log(`Yes! You have ${(budget - boatprice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(boatprice - budget).toFixed(2)} leva.`)
    }

}

solve(2000,
    "Winter",
    13);
