'use strict'


window.addEventListener('load', newDate);

function newDate () {
const dayNames = new Array("Sunday","Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday");
const monthNames = new Array(
"January","February","March","April","May","June","July",
"August","September","October","November","December");
let now = new Date();
let today = (dayNames[now.getDay()] + ", " + 
now.getDate() + " " + monthNames[now.getMonth()]
+ ", " + now.getFullYear());
document.getElementById('time').innerHTML=today;
}

