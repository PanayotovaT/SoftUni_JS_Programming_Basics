function solve(input) {

    let poorGrade = Number(input[0]);
    let index = 1;
    let command = input[index];
    let name  = "";
    let grade  = 0;
    let countPoorGrade = 0;
    let countGradesNum = 0;
    let sum = 0;


    while (command !== "Enough") {
        
        if (index % 2 !== 0 ){
            name = command;
            countGradesNum++;
        } else {
            grade = Number(command);
            if( grade <= 4) {
                countPoorGrade++;
                if(countPoorGrade >= poorGrade) {
                    console.log(`You need a break, ${countPoorGrade} poor grades.`);
                    break;
                }
        }
        sum += grade;
        
            
        }
        
        index++;
        command = input[index];
    }

    if (command === "Enough"){

        let avScore = sum / countGradesNum;
        console.log(`Average score: ${avScore.toFixed(2)}`);
        console.log(`Number of problems: ${countGradesNum}`);
        console.log(`Last problem: ${name}`);
    }



}

solve (["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

