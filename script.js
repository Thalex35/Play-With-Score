// retrieving area
const scoreArea = document.getElementById("scoreArea");
const GameArea = document.querySelector(".GameArea");
const welcomingPart = document.querySelector(".welcoming");
const loadingArea = document.querySelector(".loading");
// button 
const startBtn = document.querySelector(".startBtn")
const addBtn = document.querySelector(".addBtn");
const subBtn = document.querySelector(".subBtn");
const submitAdd = document.querySelector(".submitAdd");
const submitSub = document.querySelector(".submitSub");
const resetBtn = document.getElementById("resetBtn");


// inputs container
const addingField = document.querySelector(".adding");
const substractField = document.querySelector(".substract");

// error message area
const errorAdding = document.getElementById("errorAdding");
const errorSubs = document.getElementById("errorSubs");

addBtn.addEventListener("click", (event) => {
    addingField.classList.toggle("hidden");
})

subBtn.addEventListener("click", (event) => {
    substractField.classList.toggle("hidden");
})

startBtn.addEventListener("click", (event) =>{
    welcomingPart.classList.add("hidden");
    loadingArea.classList.remove("hidden");
    setTimeout(() =>{
        loadingArea.classList.add("hidden");
        GameArea.classList.remove("hidden");
    }, 2000)
})

function playWithScore(){

    let score = 0;

    function addOnScore(points){
        score += points;
        scoreArea.textContent = score;
    }

    function subOnScore(points){
        score -= points;
        scoreArea.textContent = score;
    }

    function resetscore(){
        score = 0;
        scoreArea.textContent = score;
    }

    function updateScore(){
        scoreArea.textContent = score;
        if (score !== 0){
            resetBtn.classList.remove("hidden");
        }
        if(score === 0) {
            resetBtn.classList.add("hidden")
        }

    }
    

    return {addOnScore, subOnScore, resetscore, updateScore}
}

const wholeScore = playWithScore();

submitAdd.addEventListener("click", (event) => {
    event.preventDefault();   

    const addingPointsInput = document.getElementById("addingPoints");

    if (addingPointsInput.value === ""){
        errorAdding.classList.remove("hidden");
        errorAdding.textContent = "write a number !"
        return;
    } else {
        errorAdding.classList.add("hidden");
    }

    let value = Number(addingPointsInput.value);

    if ( !isNaN(value)){
        wholeScore.addOnScore(value);
    }    

    wholeScore.updateScore();
    addingPointsInput.value = "";
})

submitSub.addEventListener("click", (event) => {
    event.preventDefault();

    const substractPointsInput = document.getElementById("substractPoints");

    if (substractPointsInput.value === ""){
        errorSubs.classList.remove("hidden");
        errorSubs.textContent = "write a number !"
        return;
    } else {
        errorSubs.classList.add("hidden");
    }

    let value = Number(substractPointsInput.value);

    if (!isNaN(value)) {
        wholeScore.subOnScore(value);
    }

    wholeScore.updateScore();
    substractPointsInput.value = "";

})

resetBtn.addEventListener("click", (event) => {
    event.preventDefault();

    wholeScore.resetscore();
    wholeScore.updateScore();
})

