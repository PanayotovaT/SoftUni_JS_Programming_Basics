function solve(type, rows, columns) {

    rows = Number(rows);
    columns = Number(columns);

    price = 0

    switch (type) {

        case "Premiere" :

        price = 12;

        break;

        case "Normal":
        price = 7.50;

        break;

        case "Discount" : 

        price = 5;

        break;

    }

    let revenue = rows * columns * price;
    console.log(`${revenue.toFixed(2)} leva`);

}

solve ("Normal",
"21",
"13")
;
