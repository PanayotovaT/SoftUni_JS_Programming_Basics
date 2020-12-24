function solve(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let output = "";
    let currentNum = "";

    for(let i = firstNum; i <= secondNum; i++){
        let sumEven = 0;
        let sumOdd = 0;

        currentNum = i.toString();
        for( let j = 0; j < currentNum.length; j++){

            let currentDiget = Number(currentNum[j]);
            if (j % 2 === 0){
                sumEven += currentDiget;
            } else{
                sumOdd += currentDiget;
            }

            

        }
        if(sumEven === sumOdd){

            output += currentNum + " ";

        }
    
    }
    console.log(output);

}

solve(["100115",
"100120"]);


