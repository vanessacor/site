'use strict'

// let videoElem = document.getElementsByTagName("video");
// let playButton = document.getElementById("playbtn");

// playButton.addEventListener("click", playVideo);


// function playVideo() { 
//   if (videoElem.paused === true) {
//     videoElem.play()
//     playButton.display="none"
//   }
//   else {
//     videoElem.paused();
//     playButton.display="initial"
//   }
// } 

const userLogin = document.querySelector('#register form');
const nameFeedback = document.getElementById('namefeedback');
const passFeedback = document.getElementById('emailfeedback');

userLogin.addEventListener('submit', login);

function login(event) {
  event.preventDefault();
  let userName = document.getElementById('name').value;
  let userPass = document.getElementById('email').value;
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
}

