window.onload= () =>{

let startKnob = document.querySelector(".selectButton");
let modalWindowAnswer = true;
let answer = '';

startKnob.addEventListener("click", clickOnKnob)

function clickOnKnob(){
    demandShowModalWindow();
   /*  showLoader();
    fetchWeather(); */
};

function demandShowModalWindow(){
    if (modalWindowAnswer) { 
        showModalWindow();
        debugger;
    if (answer = 'cancel') return};
    console.log('asfsaf')
    modalWindowAnswer = false;
    };

function showModalWindow(){
alert ('модалочка')
return answer
};


/* fucntion showLoader(){
    fetchWeather();
};

function fetchWeather(){

}; */

















}