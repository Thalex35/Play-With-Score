// retrieving area
const scoreArea = document.getElementById("scoreArea");
// button 
const addBtn = document.querySelector(".addBtn");
const subBtn = document.querySelector(".subBtn");
const submitAdd = document.querySelector(".submitAdd");
const submitSub = document.querySelector(".submitSub");


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

    return {addOnScore, subOnScore}
}

const wholeScore = playWithScore();

submitAdd.addEventListener("click", (event) => {
    event.preventDefault();    

    const addingPointsInput = document.getElementById("addingPoints").value;
    let value = Number(addingPointsInput);

    if ( !isNaN(value)){
        wholeScore.addOnScore(value);
    }    
})

submitSub.addEventListener("click", (event) => {
    event.preventDefault();

    const substractPointsInput = document.getElementById("substractPoints").value;
    let value = Number(substractPointsInput);

    if (!isNaN(value)) {
        wholeScore.subOnScore(value);
    }

})