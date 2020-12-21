function solve(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let space = width * length * height;
    let index = 3;
    let boxNum = input[index++];;
    let totalBoxs = 0
    while (boxNum != "Done") {

        totalBoxs += Number(boxNum);
        if(totalBoxs > space) {
            
            let neededSpace = totalBoxs - space;
            console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
            break;
        }
        boxNum = input[index++];

    }

    if (boxNum === "Done") {
        let freeSpace = space - totalBoxs;
        console.log(`${freeSpace} Cubic meters left.`)
    }

}

solve(["10",
"1",
"2",
"4",
"6",
"Done"]);