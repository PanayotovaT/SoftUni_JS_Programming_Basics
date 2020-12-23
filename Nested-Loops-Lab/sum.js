function solve(input){

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let isMagic = false;
    let combinations = 0;

    for(let i = start; i <= end; i++){
        for (let j = start; j <= end; j++){
            combinations++;
            if (i + j === magicNumber){
                isMagic = true;
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
               
                break;
            }

            
        }

        if (isMagic){
            break;
        }
    }

    if(!isMagic){
        console.log(`${combinations} combinations - neither equals ${magicNumber}`)
    }

}

solve(["23",
"24",
"20"]);
