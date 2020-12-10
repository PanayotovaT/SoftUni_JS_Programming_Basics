// 1.	Дължина в см –число в интервала [10 … 500]
// 2.	Широчина в см –число в интервала [10 … 300]
// 3.	Височина в см –число в интервала [10… 200]
// 4.	Процент  –число в интервала [0.000 … 100.000]


function fishtank(length, width, height, percent){

    let volume = Number(length) * Number(width) * Number(height) / 1000;
    let availableSpace = volume - (volume * Number(percent) * 0.01);

    console.log(availableSpace);

}

fishtank("85", "75", "47", "17")
;