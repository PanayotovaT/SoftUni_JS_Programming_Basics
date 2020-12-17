function solve(yearType, holidaysNum, weekendsHome) {
    holidaysNum = Number(holidaysNum);
    weekendsHome = Number(weekendsHome);

    let playingCity = (48 - weekendsHome) * 3 / 4;
    let holidayplay = holidaysNum * 2 / 3;
    let allGames = playingCity + holidayplay + weekendsHome;

    if(yearType === "leap"){
        allGames = 1.15 * allGames;

    }
    console.log(`${Math.floor(allGames)}`);

}

solve("normal",
"6",
"13");
