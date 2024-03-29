'use strict';

const videoElem = document.querySelector('video');
const playButton = document.querySelector('#playbtn');

playButton.addEventListener('click', playVideo);
videoElem.addEventListener('ended', videoEnded);

function playVideo () {
  if (videoElem.paused === true) {
    videoElem.play();
    playButton.style.display = 'none';
    videoElem.controls = true;
  }
}

function videoEnded () {
  playButton.style.display = 'block';
  videoElem.controls = false;
}

const userLogin = document.querySelector('#register form');
const nameFeedback = document.getElementById('namefeedback');
const passFeedback = document.getElementById('emailfeedback');

userLogin.addEventListener('submit', login);

function login (event) {
  event.preventDefault();
  const userName = document.getElementById('name').value;
  const userPass = document.getElementById('email').value;
  if (userName === '') {
    nameFeedback.style.display = 'block';
  } else {
    nameFeedback.style.display = 'none';
  }
  if (userPass === '') {
    passFeedback.style.display = 'block';
  } else {
    passFeedback.style.display = 'none';
  }
}
