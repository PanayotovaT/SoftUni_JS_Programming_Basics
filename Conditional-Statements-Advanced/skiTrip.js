function solve(days, roomType, grade) {

    days = Number(days);
    let price = 0;
    let nights = days - 1;

    // вид помещение	            по-малко от 10 дни	        между 10 и 15 дни	                   повече от 15 дни
    // room for one person	        не ползва намаление	        не ползва намаление	                   не ползва намаление
    // apartment	                30% от крайната цена	    35% от крайната цена	               50% от крайната цена
    // president apartment         	10% от крайната цена	    15% от крайната цена	               20% от крайната цена

    switch (roomType) {
        case "room for one person":
            price = 18 * nights;
            break;
        case "apartment":
            price = 25 *nights;
            if (days < 10) {
                price = 0.70 * price;
                
            } else if (days >= 10 && days <= 15) {
                price = price * 0.65; 
            } else {
                price = price / 2;
            }
            break;
        case "president apartment":
            price = nights * 35;
            if (days < 10){
                price = price * 0.90;
            } else if (days >= 10 && days <= 15){
                price = price * 0.85;
            } else {
                price = price * 0.80;
            }
            break;

    }

    if (grade === "positive"){
        price = price * 1.25;
    } else {
        price = price * 0.90;
    }

    console.log(price.toFixed(2));
}

solve("30",
"president apartment",
"negative");