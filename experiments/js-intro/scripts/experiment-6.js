'use strict'

let numberLeft = 10;
let countDown

function startCountDown(){
    countDown = setInterval(function(){
        document.getElementById("seconds").innerHTML = numberLeft;
        numberLeft -= 1;
        if(numberLeft <= 0){
          clearInterval(countDown);
          document.getElementById("seconds").innerHTML = 10
        }
      }, 1000);
}

let startBtn = document.getElementById('startbtn');

startBtn.addEventListener ('click', startCountDown);