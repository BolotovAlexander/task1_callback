window.onload= () =>{

    let startButton = document.createElement('div');
    let wrapperModalWindow = document.createElement('div');
    let modalQuestion = document.createElement('div');
    let answerYes = document.createElement('div');
    let answerNo = document.createElement('div');
    let loading = document.createElement('div'); 
    let tableWeather = '';
    let modalWindowAnswer = true;
    let weather = [];
    let tableKeyArr = [
        'Город',
        'Облачность',
        'Температура,  С',
        'Скорость Ветра,  м/с',
        'Влажность,  %',
        'Давление,  мм.рт.ст'
    ];


    startButton.className = "startButton";
    startButton.innerHTML = "Кнопка";
    document.body.prepend(startButton);
    startButton.addEventListener("click", demandShowModalWindow);

    wrapperModalWindow.className = "wrapperModalWindow";
    document.body.append(wrapperModalWindow);

    function demandShowModalWindow(){
    return new Promise((resolve, reject) => {
        if (modalWindowAnswer){resolve()}
        else {reject()}
    })
    .then (showModalWindow,xhrWeather)
    .then (yesOrNoListener)
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
    }; 

    function yesOrNoListener(){
        wrapperModalWindow.addEventListener("click", yesOrNoButton);
    };

    function yesOrNoButton(){
        return new Promise((resolve, reject) => {
            if ( event.target == answerYes ){ resolve() }
            if ( event.target == answerNo ){ reject() }
        })
        .then (xhrWeather,closeModal)    
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

    async function xhrWeather(){
        modalWindowAnswer = false;
        showLoader();

        let response = await fetch('./weather.json');
        if (response.status != 200){
            alert("Ошибка HTTP: " + response.status);
            loading.remove();
        };   
        let data = await response.json(); 
        loading.remove();
        weather[0] = data.name;
        weather[1] = data.weather[0].description   
        weather[2] = data.main.temp;      
        weather[3] = data.wind.speed;
        weather[4] = data.main.humidity;
        weather[5] = data.main.pressure;
        
        weatherTableRender();
    };
    
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
};