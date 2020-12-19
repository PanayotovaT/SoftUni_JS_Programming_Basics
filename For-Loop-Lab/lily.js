function solve(years, price, toyPrice) {
    years = Number(years);
    price = Number(price);
    toyPrice = Number(toyPrice);
    let moneyFromBirthdays = 0;
    let moneycount = 0;
    let toysCount = 0;

    for (let age = 1; age <= years; age++) {

        if (age % 2 === 0) {

            moneycount++;
            moneyFromBirthdays += moneycount * 10;

        } else {

            toysCount++;

        }
    }

    moneyFromBirthdays -= moneycount;
    let totalMoney = moneyFromBirthdays + toysCount * toyPrice;
    if (totalMoney >= price) {
        let leftMoney = totalMoney - price;
        console.log(`Yes! ${leftMoney.toFixed(2)}`);
    } else{
        let neededMoney = price - totalMoney;
        console.log(`No! ${neededMoney.toFixed(2)}`)
    }

}

solve("21", "1570.98", "3");