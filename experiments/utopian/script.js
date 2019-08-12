'use strict';

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function formatDate (date) {
  const dayOfTheWeek = dayNames[date.getDay()];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${dayOfTheWeek}, ${day} ${month}, ${year}`;
}

function main () {
  const now = new Date();
  const today = formatDate(now);
  document.getElementById('time').innerHTML = today;
}

window.addEventListener('load', main);
