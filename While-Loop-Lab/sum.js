function solve(input){

    let firstNum = Number(input[0]);
    let sum = 0;
    let index =1;


    while(sum < firstNum){

        let nextNum = Number(input[index++]);
        sum += nextNum;
    }

    console.log(sum);

}
solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
