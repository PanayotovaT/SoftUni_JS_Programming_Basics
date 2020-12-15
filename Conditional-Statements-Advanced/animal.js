function solve(animal) {

    switch (animal) {

        case "dog":
            console.log("mammal");
            break;
        case "snake":
        case "tortoise":
        case "crocodile":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;

    }

}

solve("snake");