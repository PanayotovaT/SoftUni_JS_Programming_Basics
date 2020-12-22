function solve(input) {

    let poorGrade = Number(input[0]);
    let index = 1;
    let command = input[index];
    let name  = "";
    let grade  = 0;
    let countPoorGrade = 0;
    let countGradesNum = 0;
    let sum = 0;
    let PoorGradeTarget = false;


    while (command !== "Enough") {
        
        name = command;
        index++;
        grade = Number(input[index]);
        sum += grade;

        if(grade <= 4){
            countPoorGrade++;
            if(poorGrade === countPoorGrade){
                PoorGradeTarget = true;
                break;
            }

        }
       
        countGradesNum++
        index++;
        command = input[index];
    }

    if (command === "Enough"){

        let avScore = sum / countGradesNum;
        console.log(`Average score: ${avScore.toFixed(2)}`);
        console.log(`Number of problems: ${countGradesNum}`);
        console.log(`Last problem: ${name}`);
    } else if (PoorGradeTarget) {
        console.log(`You need a break, ${countPoorGrade} poor grades.`);
    }



}
solve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
