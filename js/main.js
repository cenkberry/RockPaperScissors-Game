const userPaper = document.querySelector('.paper');
const userSciss = document.querySelector('.sciss');
const userRock = document.querySelector('.rock');
const compScore = document.querySelector('.compScore');
const userScore = document.querySelector('.userScore');
const compC = document.querySelector('.compC');
const result = document.querySelector('.result');

let userpoint = 0;
let comppoint = 0;

function newgame() {
    userpoint = 0;
    comppoint = 0;
    compC.innerHTML = `<img src="./img/question.png" alt="">`;
    compScore.innerHTML = userpoint;
    userScore.innerHTML = comppoint;
    result.innerHTML = "vs";
    result.style.color = "#000000"
    compScore.syle.color = "#000000";
    UserScore.syle.color = "#000000";
};

userPaper.addEventListener("mouseover", () => {
    userPaper.style.animationName = "move";
    userPaper.style.animationDuration = "3s";
    userPaper.style.transitionTimingFunction = "linear";
    userPaper.style.animationFillMode = "forwards";
    userRock.style.opacity = "0.2";
    userSciss.style.opacity = "0.2";
    result.innerHTML = "vs";
    result.style.color = "#000000";
    compC.innerHTML = `<img src="./img/question.png" alt="">`;
});

userPaper.addEventListener("mouseout", () => {
    userPaper.style.animationName = "";
    userRock.style.opacity = "1";
    userSciss.style.opacity = "1";
});

userRock.addEventListener("mouseover", () => {
    userRock.style.animationName = "move";
    userRock.style.animationDuration = "3s";
    userRock.style.transitionTimingFunction = "linear";
    userRock.style.animationFillMode = "forwards";
    userPaper.style.opacity = "0.2";
    userSciss.style.opacity = "0.2";
    result.innerHTML = "vs";
    result.style.color = "#000000";
    compC.innerHTML = `<img src="./img/question.png" alt="">`;
});

userRock.addEventListener("mouseout", () => {
    userRock.style.animationName = "";
    userPaper.style.opacity = "1";
    userSciss.style.opacity = "1";
});

userSciss.addEventListener("mouseover", () => {
    userSciss.style.animationName = "move";
    userSciss.style.animationDuration = "3s";
    userSciss.style.transitionTimingFunction = "linear";
    userSciss.style.animationFillMode = "forwards";
    userPaper.style.opacity = "0.2";
    userRock.style.opacity = "0.2";
    result.innerHTML = "vs";
    result.style.color = "#000000";
    compC.innerHTML = `<img src="./img/question.png" alt="">`;
});

userSciss.addEventListener("mouseout", () => {
    userSciss.style.animationName = "";
    userPaper.style.opacity = "1";
    userRock.style.opacity = "1";
});

userPaper.addEventListener("click", () => {

    const options = ["paper", "rock", "sciss"];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoose = options[randomNum];

    if (compChoose === "paper") {
        compC.innerHTML = `<img src="./img/paper.jpg" alt="">`;
        result.innerHTML = "DRAW!";
        result.style.color = "#000000";

    } else if (compChoose === "rock") {
        compC.innerHTML = `<img src="./img/rock.jpg" alt="">`;
        userpoint++;
        userScore.innerHTML = userpoint;
        result.innerHTML = "YOU WON!";
        result.style.color = "green";

    } else if (compChoose === "sciss") {
        compC.innerHTML = `<img src="./img/sciss.jpg" alt="">`;
        comppoint++;
        compScore.innerHTML = comppoint;
        result.innerHTML = "COMPUTER WON!";
        result.style.color = "red";
    }
});

userRock.addEventListener("click", () => {

    const options = ["paper", "rock", "sciss"];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoose = options[randomNum];

    if (compChoose === "paper") {
        compC.innerHTML = `<img src="./img/paper.jpg" alt="">`;
        comppoint++;
        compScore.innerHTML = comppoint;
        result.innerHTML = "COMPUTER WON!";
        result.style.color = "red";

    } else if (compChoose === "rock") {
        compC.innerHTML = `<img src="./img/rock.jpg" alt="">`;
        result.innerHTML = "DRAW!";
        result.style.color = "#000000";

    } else if (compChoose === "sciss") {
        compC.innerHTML = `<img src="./img/sciss.jpg" alt="">`;
        userpoint++;
        userScore.innerHTML = userpoint;
        result.innerHTML = "YOU WON!";
        result.style.color = "green";
    }
});

userSciss.addEventListener("click", () => {

    const options = ["paper", "rock", "sciss"];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoose = options[randomNum];

    if (compChoose === "paper") {
        compC.innerHTML = `<img src="./img/paper.jpg" alt="">`;
        userpoint++;
        userScore.innerHTML = userpoint;
        result.innerHTML = "YOU WON!";
        result.style.color = "green";

    }
    else if (compChoose === "rock") {
        compC.innerHTML = `<img src="./img/rock.jpg" alt="">`;
        comppoint++;
        compScore.innerHTML = comppoint;
        result.innerHTML = "COMPUTER WON!";
        result.style.color = "red";

    }
    else if (compChoose === "sciss") {
        compC.innerHTML = `<img src="./img/sciss.jpg" alt="">`;
        result.innerHTML = "DRAW!";
        result.style.color = "#000000";

    }
});