function solve(input){
    let number = Number(input[0]);
    let index = 1;
    let name = input[index];

    let totalAvergae = 0;
    let countOfProblems =0;

    while(name !== "Finish"){
        countOfProblems++;
        let averageGrade = 0;
        for(let i = 0; i < number; i++){
            let grade = Number(input[++index]);
            averageGrade += grade;

        }
        averageGrade /= number;
        totalAvergae += averageGrade;
        console.log(`${name} - ${averageGrade.toFixed(2)}.`);
        name = input[++index];
    }

    console.log(`Student's final assessment is ${(totalAvergae / countOfProblems).toFixed(2)}.`)
}

solve(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"]);