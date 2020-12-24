function solve(input){

    let index = 0;
    let inputLine = input[index];
    let primeSum = 0;
    let nonPrimeSum = 0;
    


    while(inputLine !== "stop"){
        let number = Number(inputLine);
        if(number < 0) {
            console.log("Number is negative.");
        } else if(number === 1){
            primeSum += number;

        }else {
            let count = 0;
        for (let j = 1; j <= number; j++){
            if(number % j === 0){
             count++;
        }
    }
        if(count === 2){
            primeSum += number;

        } else{
            nonPrimeSum += number;
        }

        }
       

        


    
    inputLine = input[++index];
}
   
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}

solve(["0",
"-9",
"0",
"stop"])
