function solve(n){
    n = Number(n);
    for (let i = 0; i<= n; i+=2){
        let pow = Math.pow(2, i);
        console.log(pow);
    }
}

solve(15)