// Array alle möglochen zahlen für die lotto divs

const LottoArray = [];

// zahlen von 1 - 49 zum array hinzufügen

for (let i = 1; i<=49; i++){
    LottoArray.push(i);
}

//Function für die lottoziehung

function startLottery(){
    //Array für die 6 Gewinnzahlen
    const winningNumbers = [];

    //Zufallszahlen generieren und dem winning array hinzufügen
    while (winningNumbers.length<6){
        const randomIndex = Math.floor(Math.random() * LottoArray.length);

        const randomNumber = LottoArray[randomIndex];

        if (!winningNumbers.includes(randomNumber)){
            winningNumbers.push(randomNumber);
         }
    }

    winningNumbers.sort((a,b) => a-b);

const tiles = document.querySelectorAll(".lotto-tile");

    for (let i = 0; i< tiles.length; i++){
   tiles[i].textContent = winningNumbers[i];
    }
    
}


const startButton = document.getElementById("button");
startButton.addEventListener("click", startLottery);

