function solve(leapYear, year){

    leapYear = Number(leapYear);
    year = Number(year);

    for(let i = leapYear; i <= year; i += 4) {

        console.log(i)

    }

}

solve("2000",
"2011");