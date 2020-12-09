//един кв. м. е 7.61лв със ДДС
//18% discount

function greenYard(squareMeters){

    let fullPrice = squareMeters * 7.61;
    let discount = fullPrice * 0.18;
    let finalPrice = fullPrice - discount;
    //•	"The final price is: {крайна цена на услугата} lv."
    //"The discount is: {отстъпка} lv."

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}

greenYard("150");