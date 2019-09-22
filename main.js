window.onload = () =>{

let divs = document.querySelectorAll('div');
let zuck = function(){ debugger;
divs.forEach(function(item) {
magic(item)
})
}

let magic = function(item){
let pause = '';
let timerId = setInterval(function() {
randomConfig(item)
},pause);
}




var MathRound = function(min,max){
return (Math.round(min - 0.5 + Math.random() * (max - min + 1)))
};
var itemStyle = '';

var randomConfig = function(item){
let id = '#'+ item.id;
let q = 50;
let itemStyle = document.querySelector(id).style;
let x = MathRound(0,(window.innerWidth - q)) + 'px';
let y = MathRound(0,(window.innerHeight - q)) + 'px';
let z = 'scale('+ MathRound(1,3) + ')'; debugger;
let cr = 'rgb('+ MathRound(0,255)+','+ MathRound(0,255)+','+ MathRound(0,255)+')';
pause = MathRound(800,4000);
tr = pause +'ms ease-out';

itemStyle.top = y;
itemStyle.left = x;
itemStyle.transform = z;
itemStyle.backgroundColor = cr;
itemStyle.transition = tr ;
return pause;
};



window.addEventListener('click',zuck)
}