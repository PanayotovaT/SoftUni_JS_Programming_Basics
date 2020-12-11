function solve(number){

    number = Number(number)
    let bonus = 0.0;

    if (number <= 100){

        bonus = 5;
    } else if( number <= 1000){
        bonus = 0.20 * number;
    } else {
        bonus = 0.1 * number;
    }

    if (number % 2 === 0){

        bonus = bonus + 1;

    } else if (number % 10 === 5){
        bonus = bonus + 2;
    }

    let finalNumber = number + bonus;

    console.log(`${bonus}`);
    console.log(`${finalNumber}`);


}

solve("175");