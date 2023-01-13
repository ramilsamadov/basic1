
const inputEl=document.querySelector("#input-el");
const checkBtn=document.querySelector("#check-btn");

const modal=document.querySelector("#myModal");
const theAnswer=document.querySelector(".theAnswer");
const closeBtn=document.querySelector(".close");

let answerOptions=["Correct,good work","Incorrect,try again"];


checkBtn.addEventListener("click", function() {
    modal.style.display="block";
    let userInput = parseInt(inputEl.value);
    if(userInput===2){
        modal.style.backgroundColor="green";
        theAnswer.textContent=answerOptions[0];
    }
    else{
        modal.style.backgroundColor="red";
        theAnswer.textContent=answerOptions[1];
    }
    })
    closeBtn.addEventListener("click", function(){
        modal.style.display="none";
    });