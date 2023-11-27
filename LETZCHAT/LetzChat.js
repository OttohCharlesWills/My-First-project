function myFunction() {
    const x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
      alert("Please Fill The Boxes");
    }
  }
  function myFunction1() {
    const a = document.getElementById("function");
    if (a.input == null || a.input == "") {
      a.input = alert("Please Fill The Boxes");
      return false;
    }
    else if(a.input == "a.value") {
      a.input == "text";
      return true;
    }
  }


  function openCity(cityName, elmnt, color) {
    let i, tabcontent, tablink;
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].style.backgroundColor = "";
    }
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").click();

  $(function() {
  'use strict';

  let body = $('body');

  function goToNextInput(e) {
    let key = e.which,
    t = $(e.target),
    sib = t.next('input');

    if(key !=9 &&(key < 48 || key >57)) {
      e.preventDefault();
      return false;
    }
    if (key === 9) {
      return true;
    }
    if (!sib || !sib.lenght) {
      sib = body.find('input').eq(0);
    }
    sib.select().focus();
  }
  function onkeydown(e) {
    let key = e.which;

    if(key ===9 ||(key >= 48 && key <=57)){
      return true;
    }
    e.preventDefault();
    return false;
    function onFocus(e) {
      $(e.target).select();
    }
    body.on('keyup', 'input', goToNextInput);
    if(key ===9 || (key >=48 && key<= 57)){
      return true;
    }
    e.preventDefault();
    return false;
  }
  function onFocus(e){
    $(e.target).select();
  }
  body.on('keyup', 'input', goToNextInput);
  body.on('keydown', 'input', onkeydown);
  body.on('click','input', onfocus);
})

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "0px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function validateform(){
  let n = document.getElementById("myForm")
  let password = document.getElementById("myPassword");
  if (n == null || n == "") {
    alert("Name can't be blank");
    return false;
  }
   else if(password.lenght<6){
    alert("Password must be at least 6 characters long");
    return false;
  }
}

function validateForm(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  let isValid = true;

  if (!email.includes('@') || !email.includes('.')){
    emailError.textContent = 'Enter a valid Email';
    isValid = false;
  } else {
    emailError.textContent = '';
  }
  if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 charcters';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }
  return isValid;
}