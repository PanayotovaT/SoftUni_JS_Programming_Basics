function solve(num){
    num = Number(num);
    let result = 1;
    for (let i = 1; i <= num; i++)
    result *= i;
    console.log(result);

}

solve("8")