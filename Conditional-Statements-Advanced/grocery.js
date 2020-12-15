function solve(fruit, day, quantity) {

    quantity = Number(quantity);

    //     Магазин за плодове през работните дни работи на следните цени:

    // плод	    banana	apple	orange	grapefruit	kiwi	pineapple	grapes
    // цена	     2.50	1.20	0.85	1.45	    2.70	5.50	    3.85
    // Събота и неделя магазинът работи на по-високи цени:
    let price = 0;

    switch (day) {

        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":

        if(fruit === "banana")
            {
                    price = quantity * 2.50;
             } else if (fruit === "apple"){
                 price = quantity * 1.20;

             } else if(fruit =="orange") {
                 price = quantity * 0.85;

             } else if(fruit === "grapefruit") {

                 price = quantity * 1.45;
             } else if(fruit === "kiwi") {
                 price = quantity * 2.70;

             } else if(fruit === "pineapple") {
                 price = quantity * 5.50;

             } else if (fruit === "grapes"){
                 price = quantity * 3.85;

             } else{
                 console.log("error");
             }
                 
             break;
                



        // плод	    banana	apple	orange	grapefruit	kiwi	pineapple	grapes
        // цена	    2.70	1.25	0.90	1.60	    3.00	5.60	    4.20
        case "Saturday":
        case "Sunday":

            if(fruit === "banana")
            {
                    price = quantity * 2.70;
             } else if (fruit === "apple"){
                 price = quantity * 1.25;

             } else if(fruit =="orange") {
                 price = quantity * 0.90;

             } else if(fruit === "grapefruit") {

                 price = quantity * 1.60;
             } else if(fruit === "kiwi") {
                 price = quantity * 3.00;

             } else if(fruit === "pineapple") {
                 price = quantity * 5.60;

             } else if (fruit === "grapes"){
                 price = quantity * 4.20;

             } else{
                 console.log("error");
             }

             break;

        default:
            console.log("error");
            break;
    }

    if (price != 0){
        console.log(price.toFixed(2));
    }

}

solve ("apple",
"Tuesday",
"2");