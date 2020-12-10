function solve(vaccationPrice, puzzleNum, dollsNum, teddyBearsNum, mignonNum, trucksNum){


    vaccationPrice = Number(vaccationPrice);
    puzzleNum = Number(puzzleNum);
    dollsNum = Number(dollsNum);
    teddyBearsNum = Number(teddyBearsNum);
    mignonNum = Number(mignonNum);
    trucksNum = Number(trucksNum);

    let puzzlePrice  = puzzleNum * 2.60;
    let dollsPrice = dollsNum * 3;
    let teddyBearPrice = teddyBearsNum * 4.10;
    let mignonPrice = mignonNum * 8.20;
    let trucksPrice = trucksNum * 2;

    let totalEarned = puzzlePrice + dollsPrice + teddyBearPrice + mignonPrice + trucksPrice;
    let toysCount = puzzleNum + dollsNum + teddyBearsNum + mignonNum + trucksNum;

    if(toysCount >= 50){

        let discount = totalEarned * 0.25;
        totalEarned = totalEarned - discount;

    }

    let rent = totalEarned * 0.1;
    totalEarned = totalEarned - rent;

    if(totalEarned >= vaccationPrice){

        let moneyLeft = totalEarned - vaccationPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else{
        let neededMoney = vaccationPrice - totalEarned;
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`)
    }



}

solve("40.8", "20", "25", "30", "50", "10");
