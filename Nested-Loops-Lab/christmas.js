function solve(input) {

    let index = 0;
    let days = Number(input[index++]);
    let moneyForCharity = 0;
    let winnerDays = 0;
    let lostDays = 0;
    
    for( let i = 1; i <= days; i++){
        let lineInput = input[index++];
        let moneyWin = 0;
        let gameWin = 0;
        let gameLost = 0;
        while(lineInput !== "Finish"){
           
            let gameResult = input[index++];
            lineInput = input[index++];

            if(gameResult === "win"){
                moneyWin += 20;
                gameWin++;
            } else{
                gameLost++;
            }
            


        }
        if(gameWin > gameLost){
            moneyWin += 0.10 * moneyWin;
            winnerDays++;
        } else {
            lostDays++;
        }
        moneyForCharity += moneyWin;

    }
    if(winnerDays > lostDays){
        moneyForCharity += 0.20 * moneyForCharity;
        console.log(`You won the tournament! Total raised money: ${moneyForCharity.toFixed(2)}`);

    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyForCharity.toFixed(2)}`);
    }



}

solve(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"]
)