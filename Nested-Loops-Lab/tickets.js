function solve(input){

    let standartTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;
    let index = 0;

    let inputLine = input[index++];

    while(inputLine !== 'Finish'){

        let movieName = inputLine;
        let ticketsCount = Number(input[index++]);
        let availabletickets = ticketsCount;

        let ticketType = input[index++];

        while(ticketType !== 'End' && availabletickets > 0){
            if(ticketType === 'standard'){
                standartTickets++;
            } else if(ticketType === 'kid'){
                kidTickets++;
            } else {
                studentTickets++;
            }
            availabletickets--;
            if(availabletickets === 0){
                break;
            }
            ticketType = input[index++];
            

        }

        
        let boughtTickets = ticketsCount - availabletickets;
        let percentage = (boughtTickets / ticketsCount * 100);
        console.log(`${movieName} - ${percentage.toFixed(2)}% full.`);

        
        inputLine = input[index++];
    }

    let totalTickets = studentTickets + kidTickets + standartTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100 ).toFixed(2)}% student tickets.`);
    console.log(`${(standartTickets / totalTickets * 100 ).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100 ).toFixed(2)}% kids tickets.`);


}

solve(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
