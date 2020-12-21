function solve(input) {

    let index = 0;
    let studentName = input[index++];
    let yearsFailed = 0;
    let year = 1;
    let total = 0;
    let yearlyGrade = Number(input[index++]);

    while (year <= 12) {


        if (yearlyGrade < 4) {
            yearsFailed++;
            if (yearsFailed === 2) {
                break;
            }
        } else {
            total += yearlyGrade;
            year++;
        }

        yearlyGrade = Number(input[index++]);
    }
    if (yearsFailed < 2) {
        let averageGrade = (total / 12);
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    } else {
        console.log(`${studentName} has been excluded at ${year} grade`)
    }

}

solve(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])