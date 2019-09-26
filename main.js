window.onload= () =>{

let startKnob = document.querySelector(".selectButton");
let wrapperModalWindow = document.querySelector(".wrapperModalWindow");
let modalQuestion = document.createElement('div');
let answerYes = document.createElement('div');
let answerNo = document.createElement('div');
let loading = document.createElement('div');
let modalWindowAnswer = true;
let answer = 'cancel';



startKnob.addEventListener("click", clickOnKnob)

function clickOnKnob(){
    demandShowModalWindow();
   /*  if (answer == 'cancel') return;
    alert("end") */ 
   /*  showLoader();
    fetchWeather(); */
};

function demandShowModalWindow(){
    if (modalWindowAnswer) { 
        showModalWindow();
        
    if (answer == 'cancel') return};
    
    };

function showModalWindow(){
    modalQuestion.className = "modalQuestion";
    modalQuestion.innerHTML = "Вы уверены, что хотите получить данные о погоде?";
    wrapperModalWindow.prepend(modalQuestion);

    answerYes.className = "answerYes";
    answerYes.innerHTML = "Ага";
    wrapperModalWindow.append(answerYes);
    
    answerNo.className = "answerNo";
    answerNo.innerHTML = "Неа";
    wrapperModalWindow.append(answerNo);
    yesOrNoListener();
}; 

function yesOrNoListener(){
    answerYes.addEventListener("click", fetchWeather);
    answerNo.addEventListener("click", closeModal);
    
};


function closeModal(){
    answerYes.removeEventListener("click", fetchWeather);
    answerNo.removeEventListener("click", closeModal);
    answerNo.remove();
    answerYes.remove();
    modalQuestion.remove();

};



function fetchWeather(){
    showLoader();
    modalWindowAnswer = !modalWindowAnswer;
    alert("dgdsg")
}; 

function showLoader(){
    closeModal();
    loading.className = "loading";
    loading.innerHTML = "Loading...";
    document.body.append(loading);
}















}