function solve(value, input, output){

    value = Number(value);

    if(input === "mm"){
        value = value / 1000;
    } else if(input === "cm") {
        value = value / 100;
    }

    if(output === "m"){
        console.log(value.toFixed(3));
    } else if (output ==="cm"){
        console.log(`${(value * 100).toFixed(3)}`);
    } else if (output === "mm"){
        console.log(`${(value * 1000).toFixed(3)}`)
    }


}

solve("45", "cm", "mm");