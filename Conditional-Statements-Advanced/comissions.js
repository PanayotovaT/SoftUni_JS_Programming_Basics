function solve(city, sale) {

    sale = Number(sale);
    let comission = 0;

// Град 	0 ≤ s ≤ 500	  500 < s ≤ 1 000	  1 000 < s ≤ 10 000	  s > 10 000
// Sofia	5%	          7%	              8%	                  12%
// Varna	4.5%	      7.5%	              10%	                  13%
// Plovdiv	5.5%	      8%	              12%	                  14.5%

    switch (city) {
        case "Sofia":
            if(sale < 0) {
                console.log("error");
            } else if(sale >= 0 && sale <= 500) {
                comission = 0.05 * sale;
            } else if (sale <= 1000){
                comission = 0.07 * sale;
            } else if (sale <= 10000) {
                comission = 0.08 * sale;
            } else if (sale > 10000) {
                comission = 0.12 * sale
            } 


            break;
        case "Varna":
            if(sale < 0) {
                console.log("error");
            } else if(sale >= 0 && sale <= 500) {
                comission = 0.045 * sale;
            } else if (sale <= 1000){
                comission = 0.075 * sale;
            } else if (sale <= 10000) {
                comission = 0.10 * sale;
            } else if (sale > 10000) {
                comission = 0.13 * sale
            } 

            break;
        case "Plovdiv":
            if(sale < 0) {
                console.log("error");
            } else if(sale >= 0 && sale <= 500) {
                comission = 0.055 * sale;
            } else if (sale <= 1000){
                comission = 0.08 * sale;
            } else if (sale <= 10000) {
                comission = 0.12 * sale;
            } else if (sale > 10000) {
                comission = 0.145 * sale;
            }
           

            break;

        default:
            console.log("error");
            break;
            

    }
    if(comission != 0) {
        console.log(comission.toFixed(2));
    }

}

solve ("Plovdiv", "-20");