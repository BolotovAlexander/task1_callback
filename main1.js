window.onload= () =>{

    let startKnob = document.createElement('div');
    let wrapperModalWindow = document.createElement('div');
    let modalQuestion = document.createElement('div');
    let answerYes = document.createElement('div');
    let answerNo = document.createElement('div');
    let loading = document.createElement('div'); 
    let tableWeather = '';
    let modalWindowAnswer = true;
    let data = '';
    let weather = [];
    let tableKeyArr = [
        'Город',
        'Облачность',
        'Температура,  С',
        'Скорость Ветра,  м/с',
        'Влажность,  %',
        'Давление,  мм.рт.ст'
    ];
/* let documentElementArr = [
    'startKnob',
    'wrapperModalWindow',
    'modalQuestion',
    'answerYes',
    'answerNo',
    'loading'
];
let x = 1;
for( let i=0; i<=documentElementArr.length; i++){
    x = documentElementArr[i];
    let `${x}` = document.createElement('div')
}; */




    startKnob.className = "startKnob";
    startKnob.innerHTML = "Кнопка";
    document.body.prepend(startKnob);
    startKnob.addEventListener("click", wtf);

    wrapperModalWindow.className = "wrapperModalWindow";
    document.body.append(wrapperModalWindow);

function wtf(){
    return new Promise((resolve, reject) => {
        if (modalWindowAnswer){resolve()}
        else {reject()}
        })
        .then (showModalWindow,xhrWeather)
        .then (yesOrNoListener)
}

 
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

       /*  yesOrNoListener(); */
    }; 

    function yesOrNoListener(){
        answerYes.addEventListener("click", xhrWeather);
        answerNo.addEventListener("click", closeModal);
    };

    function closeModal(){
        answerYes.removeEventListener("click", xhrWeather);
        answerNo.removeEventListener("click", closeModal);
        answerNo.remove();
        answerYes.remove();
        modalQuestion.remove();
        
    };

    function showLoader(){
        closeModal();
        if (tableWeather) { tableWeather.remove() };
        loading.className = "loading";
        loading.innerHTML = "Loading...";
        document.body.append(loading);
    };

    function xhrWeather(){
        modalWindowAnswer = false;
        let xhr = new XMLHttpRequest();
        /* xhr.open('GET','http://api.openweathermap.org/data/2.5/weather?id=706483&units=metric&lang=ru&APPID=198588ef71465345ba2737e46108ac74'); */
        xhr.open('GET','./weather.json');
        xhr.send();
        showLoader();

        xhr.onload = function() {
            if (xhr.status != 200) {
                alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
                loading.remove();
            } 
            else { 
                loading.remove();
                
                data = JSON.parse(xhr.responseText);
                weather[0] = data.name;
                weather[1] = data.weather[0].description   
                weather[2] = data.main.temp;      
                weather[3] = data.wind.speed;
                weather[4] = data.main.humidity;
                weather[5] = data.main.pressure;
        
                weatherTableRender();
            }
        }
    }

    function weatherTableRender(){

        tableWeather = document.createElement('table');
        tableWeather.className = 'table';
        let template = ``;
        for (let i=0; i<weather.length; i++) {
            template += (`<tr><td id='heading'>${tableKeyArr[i]}
                        </td><td id='text'>${weather[i]}</td></tr>`)
        }
        tableWeather.innerHTML = template; 
        document.body.append(tableWeather);
    }

}
