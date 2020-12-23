function solve(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    

    for(let currentFloor = floors; currentFloor >= 1; currentFloor--){
        let type = '';
        let floorOutput = '';
        if (currentFloor === floors){
            type = 'L';
        } else if (currentFloor % 2 === 1){
            type = 'A';

        } else {
            type = 'O';
        }

        for(currentRoom = 0; currentRoom < rooms; currentRoom++){
            
            floorOutput += `${type}${currentFloor}${currentRoom} `;
        }

        
        console.log(floorOutput);
    }

}

solve(["9", "5"]);