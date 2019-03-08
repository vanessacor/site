'use strict';
//when login button is clicked:
//validate name input
//validate pass input
//ok = no msg invalid = required
//

function login() {
    let userName = document.getElementById('name').value;
    let userPass = document.getElementById('pass').value;
    if(!userName =='' && !userPass ==''){
        document.getElementsByClassName('feedback').innerHTML = 'Required';
        return false;
      } else if(userName == ''){
            document.getElementById('namefeedback').innerHTML = 'Required';
            return false;
      } else if(userPass == ''){
            document.getElementById('passfeedback').innerHTML = 'Required';
            return false;
      } else if(userPass.length < 6){
            document.getElementById('passfeedback').innerHTML = 'minimum 6 character';
            return false;
        }
}

document.getElementById('loginbtn').addEventListener('click', login);

console.log('end of program')