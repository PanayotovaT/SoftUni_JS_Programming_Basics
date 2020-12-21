function solve(input){
    
    let smallest = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let command = input[index++];

    while (command !== "Stop"){

        let currentNum = Number(command);
        if(currentNum < smallest){
            smallest = currentNum;
        }

        command = input[index++];

    }
    console.log(smallest);

}

solve(["100",
"99",
"80",
"70",
"Stop"]);