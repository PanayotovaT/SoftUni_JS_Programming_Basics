function solve(input) {

    let index = 0
    let word = input[index++];

    while (word !== "Stop"){

        console.log(word);
        word = input[index++];
    }


}

solve(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);

