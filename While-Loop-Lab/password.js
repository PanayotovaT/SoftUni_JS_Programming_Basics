function solve(input) {

    let username = input[0];
    let password = input[1];

    let index = 2;
    let currentPassword = input[index++];

    while(currentPassword !== password){

        currentPassword = input[index++];
    }

    console.log(`Welcome ${username}!`)

}

solve
(["Gosho",
"secret",
"secret"]);