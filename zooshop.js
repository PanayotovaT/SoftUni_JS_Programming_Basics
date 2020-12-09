function zoo(dogNumber, animalNumber){

    let dogFood = dogNumber * 2.50;
    let animalFood = animalNumber * 4;
    let expense = dogFood + animalFood;
    let output = `${expense} lv.`

    console.log(output);

}

zoo("13", "9");