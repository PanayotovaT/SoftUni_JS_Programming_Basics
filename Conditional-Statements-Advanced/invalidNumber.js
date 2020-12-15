function solve(number) {

    number = Number(number);
    let isValid = number >= 100 && number <= 200 || number === 0;

    if (!isValid) {
        console.log("invalid");
    }

}

solve(120);