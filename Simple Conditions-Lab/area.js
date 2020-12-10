function solve(type, second, third){

    let area;
    if(type === "square"){

        let a = Number(second);
        area = a * a.toFixed(3);
        
    } else if(type === "rectangle"){

        let a = Number(second);
        let b = Number(third);
        area = a * b.toFixed(3);
       
    } else if (type === "circle"){

        let r = Number(second);
        area = r * r * Math.PI;
    } else {
        let a = Number(second);
        let ha = Number(third);
        area = (a * ha) /2;
    }

    console.log(area.toFixed(3));
}


solve ("triangle",
"4.5",
"20");