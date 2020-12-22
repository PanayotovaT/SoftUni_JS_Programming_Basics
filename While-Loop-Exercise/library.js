function solve(input) {

    let favbook = input[0];
    let index = 1;
    let bookCount = 0;
    
    
    
    let book = input[index++];
    while(book !== "No More Books"){


        if( book === favbook){
            console.log(`You checked ${bookCount} books and found it.`);
            break;
        }
        
        bookCount++;
        book = input[index++];
    }

    if(book === "No More Books"){
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCount} books.`);

    }

}

solve(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);
