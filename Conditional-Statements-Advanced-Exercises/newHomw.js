function solve(flower, quantity, budget) {
    quantity = Number(quantity);
    budget = Number(budget);

    // цвете	            Роза	Далия	Лале	Нарцис	Гладиола
    // Цена на брой в лева	5	    3.80	2.80	 3	     2.50
    //                    Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"

    let price = 0;
    let totalPrice = 0;

    switch (flower) {
        case "Roses":
            price = 5;

            break;
        case "Dahlias":
            price = 3.80;
            break;

        case "Tulips":
            price = 2.80;
            break;

        case "Narcissus":
            price = 3;
            break;

        case "Gladiolus":
            price = 2.50;

            break;

    }

    totalPrice = price * quantity;
    // •	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
    // •	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
    // •	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
    // •	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
    // •	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
    
    if (flower === "Roses" && quantity > 80) {
        totalPrice = 0.90 * totalPrice;
    } else if ((flower === "Dahlias" && quantity > 90) || (flower === "Tulips" && quantity > 80)) {
        totalPrice = 0.85 * totalPrice;
    } else if (flower === "Narcissus" && quantity < 120) {
        totalPrice = 1.15 * totalPrice;
    } else if (flower === "Gladiolus" && quantity < 80) {
        totalPrice = 1.20 * totalPrice;
    }
    
    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }

}

solve("Tulips",
"88",
"260");