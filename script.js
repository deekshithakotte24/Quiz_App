const darkModeToggle=document.querySelector("#chk");
const modalOpenBtn=document.getElementById("condition-modal-btn");
const modalContainer=document.querySelector(".quiz-modal-container");
const modalConditionBox=document.querySelector(".quiz-modal-condition");
const exitModal=document.querySelector(".exit-modal");
const startQuizBtn=document.querySelector(".start-quiz");

const questionSection = document.querySelector(".question-section");
const questionText = questionSection.querySelector(".question-text");
const questionOptionContainer =questionSection.querySelector(".question-options");
const questionProgressText = questionSection.querySelector(".question-progress-text");
const nextQuiz = questionSection.querySelector(".next-question");
const scoreElement = questionSection.querySelector(".score");
const questionProgressbar=questionSection.querySelector(".question-progress");
const resultSection = document.querySelector(".result-section");
const canvas = document.getElementById("my-canvas");
const resultExpression = resultSection.querySelector(".result-expression");
const resultText = resultSection.querySelector(".result-text");
const restart = resultSection.querySelector(".restart");
const backHome = resultSection.querySelector(".back-to-home");




//variables
let questionIndex=0;
let userScore=0;


//correct icons
const tick=document.createElement("div");
tick.classList.add("tick-icon");
tick.innerHTML=`<i class="fa-solid fa-check"></i>`;
//wrong icon
const cross=document.createElement("div");
cross.classList.add("cross-icon")
cross.innerHTML=`<i class="fa-solid fa-xmark"></i>`;



const modalFunc=(condition)=>{
    if(condition==="open") {
        modalConditionBox.classList.add("active")
        // document.body.style.overflow="hidden";
        if(document.body.classList.contains("dark-mode")){
            modalContainer.classList.add("active-dark");
        } 
        else {
            modalContainer.classList.add("active")
        }
    }
    else {
        modalConditionBox.classList.remove("active");
        document.body.style.overflow="auto";
        if(document.body.classList.contains("dark-mode")) {
            modalContainer.classList.remove("active-dark");
        } 
        else {
            modalContainer.classList.remove("active")
        }
    }
};

//restart 
const initialShowQuestion=()=>{
    resultSection.classList.remove("active");
    canvas.style.display="none";

    questionIndex=0;
    userScore=0
    scoreElement.textContent=userScore;
}

//questions
const showQuestion=()=>{
    questionSection.classList.add("active");
    if(document.querySelectorAll(".single-option")){
        document.querySelectorAll(".single-option").forEach((element)=>element.remove());
    }

    //questiontext
    questionText.textContent=`${questionIndex+1}.${quizArr[questionIndex].question}`;

    //question options
    const options=quizArr[questionIndex].options;

    for(let option in options){
        let singleQuestionElement=document.createElement("div");
        singleQuestionElement.classList.add("single-option");
        singleQuestionElement.innerHTML=`
        <span class="single-option-text">${option}.${options[option]}</span>`;
        singleQuestionElement.addEventListener("click",(e)=>
        selectedAnswer(option,e));
        questionOptionContainer.append(singleQuestionElement);
    }

     questionProgress();

     //nextquestionbtn
     nextQuiz.style.display="none"
}

//after selecting an opotion
const selectedAnswer=(option,e)=>{
    const selectedOption=option;
    const correctOption=quizArr[questionIndex].answer;
    //checking condition for crctanswer
    if(selectedOption===correctOption){
        userScore+=5;
        scoreElement.textContent=userScore;
        showIconTick(e,true);
    } else {
        showIconTick(e,false);
        showCorrectAnswer();
    }

    //after selecting an option,cnt select other
    const singleOption=document.querySelectorAll(".single-option");
    singleOption.forEach((element)=>element.classList.add("disabled"));

    //showing nextquestion btnS
    nextQuizBtnChange();
}

//icon for correct & incorrect
const showIconTick=(e,isTick)=>{
    if(e.target.classList.contains("single-option")){
        e.target.children[0].insertAdjacentElement(
            "afterend", isTick===true? tick : cross);
        e.target.classList.add(isTick===true ? "correct" : "incorrect");
    } else {
        e.target.insertAdjacentElement("afterend",isTick===true? tick : cross);
        e.target.parentNode.classList.add(isTick===true? "correct" : "incorrect");
    }
};


//correct answer
const showCorrectAnswer=()=>{
    const singleOption=document.getElementsByClassName("single-option");
    
    const correctOption=quizArr[questionIndex].answer;

    //forloop for crct option with tick
    for(let option of singleOption){
        if(option.textContent.trim().slice(0,1)==correctOption){
            option.children[0].insertAdjacentElement("afterend",tick);
            option.classList.add("correct")
        }

        option.classList.add("disabled");
    }
}


//question progress
const questionProgress=()=>{
    //questionprogessbar
    questionProgressbar.style.width=`${((questionIndex+1)/quizArr.length)*100}%`;
    //questionprogresstext
    questionProgressText.innerHTML=`<span class="bold">${
        questionIndex+1
    }</span> of <span class="bold">${quizArr.length}</span>Questions`;
};

//nextquestionbtn
const nextQuizBtnChange=()=> {
    nextQuiz.style.display="block";
    if(questionIndex===quizArr.length-1) {
        nextQuiz.textContent="Show Result";
    } else {
        nextQuiz.textContent="Next Question";
    }
};

//results
const showResult = ()=>{
    questionSection.classList.remove("active");
    resultSection.classList.add("active");
    canvas.style.display="block";
    //result text
    resultText.textContent=`You scored ${userScore} points`;
}
//event listeners
darkModeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode")
    
});

modalOpenBtn.addEventListener("click",()=>{
    modalFunc("open")
});

exitModal.addEventListener("click",()=>{
    modalFunc("close")
});

modalContainer.addEventListener("click",(e)=>{
    if(e.target==modalContainer){
        modalFunc("close")
    }
});

startQuizBtn.addEventListener("click",()=>{
    modalFunc("close");
    showQuestion()
    scoreElement.textContent=0;
});

nextQuiz.addEventListener("click",()=>{
    questionIndex++;

    if(questionIndex>quizArr.length-1) {
        showResult();
    } else {
        showQuestion();
    }
});

//restart
restart.addEventListener("click",()=>{
    initialShowQuestion();
    showQuestion();
});

//home
backHome.addEventListener("click",()=>{
    initialShowQuestion();
})





