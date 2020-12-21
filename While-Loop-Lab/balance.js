function solve(input){

    let total = 0;
    let index = 0;
    let command = input[index++];

    while (command !== "NoMoreMoney"){
        let currentAmmount = Number(command);

        if(currentAmmount < 0) {
            console.log("Invalid operation!");
            break;
        }

        total += currentAmmount;
        console.log(`Increase: ${currentAmmount.toFixed(2)}`);
        command = input[index++];
    }

    console.log(`Total: ${total.toFixed(2)}`);

}

solve(["120",
"45.55",
"-150"])

