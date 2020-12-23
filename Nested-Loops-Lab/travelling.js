function solve(input) {

    let index = 0;
    let destination = input[index++];
    
    
    
    
    while (destination !== 'End') {
        let moneyIsEnough = false;
        let minBudget = Number(input[index++]);
        let savedMoney = 0;
        
        while (!moneyIsEnough){
            savedMoney += Number(input[index++]);
            if(savedMoney >= minBudget){
                console.log(`Going to ${destination}!`)
                moneyIsEnough = true;
                
                destination = input[index++];
                break;
            }
        }

    
        
    }




}

solve(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);