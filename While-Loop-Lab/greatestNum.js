function solve(input) {

    let biggest = Number(input[0]);
    let index = 1;
    let command= input[index++];

    while (command !== "Stop") {
        let current =Number(command);

        if (current > biggest) {
            biggest = current;
        }

        command = input[index++];
    }
    console.log(biggest);

}
solve(["-10",
"20",
"-30",
"Stop"]);