'use strict';
//when login button is clicked:
//validate name input
//validate pass input
//ok = no msg 
// invalid = required msg

const userLogin = document.querySelector('#login form');
const nameFeedback = document.getElementById('namefeedback');
const passFeedback = document.getElementById('passfeedback');
const ngthFeedback = document.getElementById('lengthfeedback');

userLogin.addEventListener('submit', login);

function login(event) {
  event.preventDefault();
  let userName = document.getElementById('name').value;
  let userPass = document.getElementById('pass').value;
  if (userName == '') {
    nameFeedback.style.display = 'block';
  }     
  else {
    nameFeedback.style.display = 'none';
  }
  if (userPass == '') {
    passFeedback.style.display = 'block';
  } 
  else {
    passFeedback.style.display = 'none';
  }
  if (userPass.length < 6) {
    ngthFeedback.style.display = 'block';
  } 
  else {
    ngthFeedback.style.display = 'none';
  }
}
