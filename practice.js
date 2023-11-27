$(function() {
    'use strict';
  
    const body = $('body');
  
    function goToNextInput(e) {
      let key = e.which,
        t = $(e.target),
        sib = t.next('input');
  
      if (key != 9 && (key < 48 || key > 57)) {
        e.preventDefault();
        return false;
      }
  
      if (key === 9) {
        return true;
      }
  
      if (!sib || !sib.length) {
        sib = body.find('input').eq(0);
      }
      sib.select().focus();
    }
  
    function onKeyDown(e) {
      const key = e.which;
  
      if (key === 9 || (key >= 48 && key <= 57)) {
        return true;
      }
  
      e.preventDefault();
      return false;
    }
    
    function onFocus(e) {
      $(e.target).select();
    }
  
    body.on('keyup', 'input', goToNextInput);
    body.on('keydown', 'input', onKeyDown);
    body.on('click', 'input', onFocus);
  
  })

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
const inputElements = [...document.querySelectorAll('input.code-input')]

inputElements.forEach((ele,index)=>{
  ele.addEventListener('keydown',(e)=>{
    // if the keycode is backspace & the current field is empty
    // focus the input before the current. Then the event happens
    // which will clear the "before" input box.
    if(e.keyCode === 8 && e.target.value==='') inputElements[Math.max(0,index-1)].focus()
  })
  ele.addEventListener('input',(e)=>{
    // take the first character of the input
    // this actually breaks if you input an emoji like 👨‍👩‍👧‍👦....
    // but I'm willing to overlook insane security code practices.
    const [first,...rest] = e.target.value
    e.target.value = first ?? '' // first will be undefined when backspace was entered, so set the input to ""
    const lastInputBox = index===inputElements.length-1
    const didInsertContent = first!==undefined
    if(didInsertContent && !lastInputBox) {
      // continue to input the rest of the string
      inputElements[index+1].focus()
      inputElements[index+1].value = rest.join('')
      inputElements[index+1].dispatchEvent(new Event('input'))
    }
  })
})


// mini example on how to pull the data on submit of the form
// function onSubmit(e){
//   e.preventDefault()
//   const code = inputElements.map(({value})=>value).join('')
//   console.log(code)
// }
// const nameField = document.querySelector("input");

// nameField.addEventListener("input", () => {
//   nameField.setCustomValidity("");
//   nameField.checkValidity();
//   console.log(nameField.checkValidity());
// });

// nameField.addEventListener("invalid", () => {
//   nameField.setCustomValidity("Please fill in your First Name.");
// });
const nameField = document.querySelector("input");

nameField.addEventListener("input", () => {
  nameField.setCustomValidity("");
  nameField.checkValidity();
  console.log(nameField.checkValidity());
});

nameField.addEventListener("invalid", () => {
  nameField.setCustomValidity("Please fill in your First Name.");
});
/*************special code*************/
// function validateform(){
//   let n = document.getElementById("myForm");
//   let password = document.getElementById("myInput");
//   if (n == null || n == "") {
//     alert("Name can't be blank");
//     return false;
//   } else if(password.lenght<6){
//     alert("Password must be at least 6 characters long");
//     return false;
//   }
// }
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

// Initialize Twilio client
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = twilio(accountSid, authToken);

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'YOUR_GMAIL_ADDRESS',
    pass: 'YOUR_GMAIL_PASSWORD',
  },
});

// Endpoint to send verification code to mobile number
app.post('/send-sms', (req, res) => {
  const { phoneNumber } = req.body;

  // Generate a random 6-digit verification code
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  // Send SMS via Twilio
  client.messages
    .create({
      body: `Your verification code is: ${verificationCode}`,
      from: 'YOUR_TWILIO_PHONE_NUMBER',
      to: phoneNumber,
    })
    .then(() => {
      res.status(200).json({ message: 'Verification code sent to the provided number.' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to send verification code.' });
    });
});

// Endpoint to send verification code to email
app.post('/send-email', (req, res) => {
  const { email } = req.body;

  // Generate a random 6-digit verification code
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  // Email configuration
  const mailOptions = {
    from: 'YOUR_GMAIL_ADDRESS',
    to: email,
    subject: 'Verification Code',
    text: `Your verification code is: ${verificationCode}`,
  };

  // Send email via Nodemailer
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send verification code.' });
    } else {
      res.status(200).json({ message: 'Verification code sent to the provided email.' });
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});