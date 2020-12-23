function solve(input) {

    let number = Number(input[0]);
    let counter = 0;


    for (let i = 0; i <= number; i++) {
        
        for (let j = 0; j <= number; j++) {
            
            for (let k = 0; k <= number; k++) {

                if (i + j + k === number) {
                    counter++;
                    break;
                }
                
            }
            

        }

    }
    console.log(counter);
}


solve(["5"]);