'use strict';
//when login button is clicked:
//validate name input
//validate pass input
//ok = no msg 
// invalid = required msg

const userLogin= document.getElementById('loginbtn');
userLogin.addEventListener('click', login);

function login() {
    let userName = document.getElementById('name').value;
    let userPass = document.getElementById('pass').value;
    if(userName ==''){
          document.getElementById('namefeedback').innerHTML = 'Required';
      }     
    if(userPass == ''){
          document.getElementById('passfeedback').innerHTML = 'Required';
      } 
    if(userPass.length < 6){
          document.getElementById('passfeedback').innerHTML = 'minimum 6 characters';
      } 
}