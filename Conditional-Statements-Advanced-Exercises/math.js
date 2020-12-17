function solve(num1, num2, operator) {

    num1 = Number(num1);
    num2 = Number(num2);
    let result = 0;
    let evenOrOdd = "";


    if (operator === "+") {
        result = num1 + num2;

    } else if (operator === "-") {
        result = num1 - num2;

    } else if (operator === "*") {
        result = num1 * num2;

    }
    if (operator != "/" && operator != "%") {
        if (result % 2 === 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    }
    if (operator === "/") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }

    } else if (operator === "%") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            result = num1 % num2;

            console.log(`${num1} % ${num2} = ${result}`);
        }
    }

}

solve("112",
"0",
"/");