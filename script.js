let container = document.querySelector("#container");
let rabbit = document.querySelector("#rabbit");
let dragon = document.querySelector("#dragon");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let start1 = document.querySelector("#start1");
//declaring variable for score
let interval = null;
let playerScore = 0;


//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

start1.style.display = "block";
//start Game
window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        start1.style.display = "none";
        gameOver.style.display = "none";
        restart.style.display = "none";
        dragon.classList.add("dragonActive");

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});


//jump Your Character
window.addEventListener("keydown", (e) => {
    //    console.log(e);

    if (e.key == "ArrowUp")
        if (rabbit.classList != "rabbitActive") {
            rabbit.classList.add("rabbitActive");

            //                remove class after 0.5 seconds
            setTimeout(() => {
                rabbit.classList.remove("rabbitActive");
            }, 500);
        }
});

//'Game Over' if 'Character' hit The 'Block' 
let result = setInterval(() => {
    let rabbitBottom = parseInt(getComputedStyle(rabbit).getPropertyValue("bottom"));
    //    console.log("dinoBottom" + dinoBottom);

    let dragonLeft = parseInt(getComputedStyle(dragon).getPropertyValue("left"));
    //    console.log("BlockLeft" + blockLeft);

    if (rabbitBottom <= 200 && dragonLeft >= 40 && dragonLeft <= 150) {
        //        console.log("Game Over");

        gameOver.style.display = "block";
        restart.style.display = "block";
        dragon.classList.remove("dragonActive");
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);
