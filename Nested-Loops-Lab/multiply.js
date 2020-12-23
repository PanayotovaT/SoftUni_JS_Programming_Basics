function solve() {

    for( let i = 1; i <= 10; i++){
        for (let second = 1; second <= 10; second++){
            let result = i * second;
            console.log(`${i} * ${second} = ${result}`)
        }
    }

}

solve()