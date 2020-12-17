function solve(month, nights) {

    nights = Number(nights);
    let studioPrice = 0;
    let aparmentPrice = 0;
    let totalPriceStudio = 0;
    let totalPriceAparment = 0;


    switch (month) {
        case "May":
        case "October":

            studioPrice = 50;
            aparmentPrice = 65;

            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            aparmentPrice = 68.70;


            break;

        case "July":
        case "August":
            
                studioPrice = 76;
                aparmentPrice = 77;
            

            break;

    }

    totalPriceStudio = studioPrice * nights;
    totalPriceAparment = aparmentPrice * nights;

    if((nights > 7 && nights <= 14) && (month === "May" || month === "October")) {
        totalPriceStudio = 0.95 * totalPriceStudio;
    } else if (nights > 14) {
        if(month === "May" || month === "October"){
            totalPriceStudio = 0.70 * totalPriceStudio;
        } else if (month === "June" || month === "September") {
            totalPriceStudio = 0.80 * totalPriceStudio;
        } 
        totalPriceAparment = 0.90 * totalPriceAparment;

    }

    console.log(`Apartment: ${totalPriceAparment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`)
}

solve("August",
"20");