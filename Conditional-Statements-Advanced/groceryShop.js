function solve(product, city, quantity) {

    quantity = Number(quantity);
    let price = 0;

    if (city === "Sofia") {

        switch (product) {
            case "coffee":
                price = 0.50 * quantity;
                break;
            case "water":
                price = 0.80 * quantity;
                break;
            case "beer":
                price = 1.20 * quantity;
                break;
            case "sweets":
                price = 1.45 * quantity;
                break;
            case "peanuts":
                price = 1.60 * quantity;
                break;
        }

    } else if (city === "Plovdiv") {
        switch (product) {

            case "coffee":
                price = 0.40 * quantity;
                break;
            case "water":
                price = 0.70 * quantity;
                break;
            case "beer":
                price = 1.15 * quantity;
                break;
            case "sweets":
                price = 1.30 * quantity;
                break;
            case "peanuts":
                price = 1.50 * quantity;
                break;

        }

    } else if (city === "Varna") {

        switch (product) {

            case "coffee":
                price = 0.45 * quantity;
                break;
            case "water":
                price = 0.70 * quantity;
                break;
            case "beer":
                price = 1.10 * quantity;
                break;
            case "sweets":
                price = 1.35 * quantity;
                break;
            case "peanuts":
                price = 1.55 * quantity;
                break;

        }

    }

    // град / продукт	coffee	water	beer	sweets	peanuts
    // Sofia	        0.50	0.80	1.20	1.45	1.60
    // Plovdiv      	0.40	0.70	1.15	1.30	1.50
    // Varna	        0.45	0.70	1.10	1.35	1.55
    console.log(price);

}

solve("beer", "Plovdiv", "2");