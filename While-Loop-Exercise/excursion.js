function solve(input) {

    let moneyForExcursion = Number(input[0]);
    let totalMoney = input[1];
    let index = 2;
    
    let spendCount = 0;
    let isSpend = false;
    let days = 0;

    while(totalMoney < moneyForExcursion) {
        let command = input[index];
        index++;
        let money = Number(input[index]);
        
        if (command === "save"){
            
            totalMoney += money;
            spendCount = 0;
        } else if (command === "spend"){
            totalMoney -= money;
            spendCount++;
            if(totalMoney < 0) {
                totalMoney = 0;
            }
            
        }
        days++;
        
        if (spendCount === 5){
            
            isSpend = true;
            break;
        }
        index++;

    }
    if (isSpend) {
        console.log(`You can't save the money.\n${days}`);
    } else {
        console.log(`You saved the money for ${days} days.`)
    }


}

solve(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);