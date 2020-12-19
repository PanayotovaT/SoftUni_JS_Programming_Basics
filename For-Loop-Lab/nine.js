function solve(num1, num2){

    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
  

    for(let i = num1; i <= num2; i++){
        if(i % 9 === 0){
            sum += i;
            

        }
    }
    console.log(`The sum: ${sum}`);
    for(let k = num1; k <= num2; k++){
        if (k % 9 === 0) {
            console.log(k);
        }
    }
    

}
solve("100", "200");