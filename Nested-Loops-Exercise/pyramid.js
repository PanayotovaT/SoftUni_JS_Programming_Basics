function solve(input){

    let n = Number(input[0]);
    let count = 1;
    let flag = false;

    for(let i = 1; i <= n; i++){
        let output = "";
        for (let j = 0; j < i; j++){

            output += count + ' ';
            if(count === n){
                flag = true;
                break;
            }
            
            count++;
            

        }
        console.log(output);
        if(flag){
            break;
        }

    }
}

solve(["15"])