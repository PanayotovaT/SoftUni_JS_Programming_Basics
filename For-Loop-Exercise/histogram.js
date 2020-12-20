function solve(input) {

    let n = Number(input[0]);
    let p1count = 0;
    let p2count = 0;
    let p3count = 0;
    let p4count = 0;
    let p5count = 0;

    for (let i = 1; i < input.length; i++) {
        let number = Number(input[i]);


        if (number < 200) {
            p1count++;

        } else if (number < 400) {

            p2count++;

        } else if (number < 600) {

            p3count++;

        } else if (number < 800) {

            p4count++;

        } else {
            p5count++;

        }

    }

    let p1 = p1count / n * 100;
    let p2 = p2count / n * 100;
    let p3 = p3count / n * 100;
    let p4 = p4count / n * 100;
    let p5 = p5count / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

solve(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"]);