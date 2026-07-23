// retrieving area
const scoreArea = document.getElementById("scoreArea");
// button 
const addBtn = document.querySelector(".addBtn");
const subBtn = document.querySelector(".subBtn");
const submitAdd = document.querySelector(".submitAdd");
const submitSub = document.querySelector(".submitSub");
const resetBtn = document.getElementById("resetBtn");


// inputs container
const addingField = document.querySelector(".adding");
const substractField = document.querySelector(".substract");

addBtn.addEventListener("click", (event) => {
    addingField.classList.toggle("hidden");
})

subBtn.addEventListener("click", (event) => {
    substractField.classList.toggle("hidden");
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

