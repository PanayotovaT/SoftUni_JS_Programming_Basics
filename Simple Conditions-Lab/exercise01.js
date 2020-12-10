function greaterNum(firstNum, secondNum){
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    if(firstNum >= secondNum){
        console.log(firstNum);
    } else{
        console.log(secondNum);
    }

    let maxNumber = Math.max( 9, 11);
    console.log(maxNumber);

}

greaterNum("5", "7");
