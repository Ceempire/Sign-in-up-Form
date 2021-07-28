function load() {
  var $, $$, before, pass, pass2, details,  details2, signInButton, signUpButton, username, firstname, surname, email, err, valid, input, inputs;
   $ =  document.querySelector.bind(document);
  $$ =  document.querySelectorAll.bind(document);
  details = $$(".input-sign-in");
 details2 = $$(".input-sign-up");
//  before = window.getComputedStyle(document.getElementsByClassName("switch-header")[0], ":before").getPropertyValue('background');
//  before = window.getProperty(document.getElementsByClassName("switch-header")[0], ":before");
  details.forEach((inp,idx)=>{
   inp.onfocus =()=>{
     $(".reg"+idx).style.width ="100%";
     $(".reg"+idx).style.border ="1px solid #ffffff";
   };
   inp.onblur =()=>{
     $(".reg"+idx).style.width ="85%";
     $(".reg"+idx).style.border ="1px solid #ffffff95";
     validInput("error"+idx, "reg"+idx);
     
   };
   
   if(window.innerWidth >= 600) {
     inp.onfocus =()=>{
     $(".reg"+idx).style.width ="100%";
     $(".reg"+idx).style.border ="3px solid #ffffff";

     
   };
   inp.onblur =()=>{
     $(".reg"+idx).style.width ="85%";
     $(".reg"+idx).style.border ="3px solid #ffffff95";
     validInput("error"+idx, "reg"+idx);
   };
  }
 });
 
   details2.forEach((inp,idx)=>{
   inp.onfocus =()=>{
     $(".reg"+idx+""+idx).style.width ="100%";
     $(".reg"+idx+""+idx).style.border ="1px solid #ffffff";

   };
   inp.onblur =()=>{
  
     $(".reg"+idx+""+idx).style.width ="85%";
     $(".reg"+idx+""+idx).style.border ="1px solid #ffffff95";
     validInput("error"+idx+""+idx, "reg"+idx+""+idx);
   };
   
   if(window.innerWidth >= 600) {
     inp.onfocus =()=>{
     $(".reg"+idx+""+idx).style.width ="100%";
     $(".reg"+idx+""+idx).style.border ="3px solid #ffffff";
     
   };
   inp.onblur =()=>{
     $(".reg"+idx+""+idx).style.width ="85%";
     $(".reg"+idx+""+idx).style.border ="3px solid #ffffff95";
     validInput("error"+idx+""+idx, "reg"+idx+""+idx);
   };
  }
 });
 
 $$(".sign").forEach((elem,ind,arr)=>{
   elem.addEventListener("click", switchHeader);
   function switchHeader(){
     let a, color;
    if (ind != 0) {
      a=50;
      fadeInSignUp();
      } else  {
        a=0;
        fadeInSignIn("fade");
      }
   
     
    $(".bottom-border").style.left = `${a}%`;
  //  (a == 50)? color = "red": color = "white";
  arr[ind].style.setProperty("color", "#fff");
for(let i =0; i < arr.length; i++) {
   if(i != ind ) 
 arr[i].style.setProperty("color", "#ffffff80");
     
   //  location.reload();
    }
   }
 });
 
 
 errors = $$(".error");
 signInButton = $("#button");
 signUpButton = $("#button2");
 username = $("#username");
 pass = $("#password");
 pass2 = $("#password2");
 firstname = $("#firstname");
 //surname = $("#surname");
 email = $("#email");
  
  
  
  function invalidInput(err, input) {
    $("."+err).style.display = "block";
    $("."+input).style.borderColor = "#dd0909";
  }
  
  function validInput(valid, inputs) {
    $(`.${valid}`).style.display = "none";
    $(`.${inputs}`).style.borderColor = "#ffffff95";
  }
 
  
  
  function validateInput() {
    
  details.forEach((inp, idx)=>{
      if(inp.value.trim =="" || !(inp.value)) {
      invalidInput("error"+idx, "reg"+idx);
      event.preventDefault();
    } else if(username.value =="" || username.value == " ") {
        invalidInput("error0", "reg0");
     
        
    } else if(pass.value =="" || pass.value == " ") {
      invalidInput("error1", "reg1");

    }  else {
      return true;
 /*  startButton.innerHTML = "<span><i class='spinning fas fa-spinner'></i></span>  Start Quiz";*/
     }
   });
  
  
      username.onfocus = ()=>{
       validInput("error0", "reg0");
     //  $(".error0").style.display = "none";
      };
      pass.onfocus = ()=>{
        validInput("error1", "reg1");
      };

  }
  
  
  function validateInput2() {
    
  for(let i=0; i < details2.length; i++) {
    
     if(details2[i].value.trim =="" || !(details2[i].value)) {
invalidInput("error"+i+""+i, "reg"+i+""+i);
      event.preventDefault();
     } else if(firstname.value =="" || firstname.value == " ") {
      invalidInput("error00", "reg00");
    } /*else if(surname.value =="" || surname.value == " ") {
      invalidInput("error11");
    }*/ else if(email.value =="" || email.value == " ") {
      invalidInput("error11", "reg11");
    } else if(pass2.value =="" || pass2.value == " ") {
      invalidInput("error22", "reg22");
    } else {
      return true;
 /*  startButton.innerHTML = "<span><i class='spinning fas fa-spinner'></i></span>  Start Quiz";*/
     }
   }
 
  
      firstname.onfocus = ()=>{
        validInput("error00", "reg00");
      };
   /*   surname.onfocus = ()=>{
        validInput("error11", "reg11");
      };*/
      email.onfocus = ()=>{
        validInput("error11", "reg11");
      };
      pass2.onfocus = ()=>{
        validInput("error22", "reg22");
      };
    
  
  }
  

$("#form1").addEventListener("submit", validateInput);
$("#form2").addEventListener("submit", validateInput2);
 
 $(".hide").addEventListener('click', ()=>{

  if(pass.type == "password") {
    pass.type = "text";
    $(".hide").classList.remove("fa-eye-slash");
    $(".hide").classList.add("fa-eye");
    } else {
      pass.type = "password";
      $(".hide").classList.remove("fa-eye");
    $(".hide").classList.add("fa-eye-slash");
    }
    
 });
 
 
 $(".hide2").addEventListener('click', ()=>{

  if(pass2.type == "password") {
    pass2.type = "text";
    $(".hide2").classList.remove("fa-eye-slash");
    $(".hide2").classList.add("fa-eye");
    } else {
      pass2.type = "password";
      $(".hide2").classList.remove("fa-eye");
    $(".hide2").classList.add("fa-eye-slash");
    }
    
 });
 
 
 
 let anim;
 function fadeInSignIn(anim) {
   $(".sign-up-wrapper").style.display = "none  ";
   $(".sign-in-wrapper").style.display = "flex";
   $(".sign-in-wrapper").classList.remove(anim);
  setTimeout(()=>{
    $(".sign-in-wrapper").classList.add(anim);
  
  details.forEach((item, num)=>{
      item.value = "";
     validInput("error"+num, "reg"+num);
    });
    },10);
 }
 
 function fadeInSignUp() {
   $(".sign-in-wrapper").style.display = "none  ";
   $(".sign-up-wrapper").style.display = "flex";
   $(".sign-up-wrapper").classList.remove("slide");
  setTimeout(()=>{
    $(".sign-up-wrapper").classList.add("slide");
   
    details2.forEach((item, pos)=>{
      item.value = "";
     validInput("error"+pos+""+pos, "reg"+pos+""+pos);
    });

    },10);
 }
 
 function fadeIn() {
   $(".sign-in-wrapper").classList.add("fade");
   $(".sign-in-wrapper").style.display = "flex";
   $(".sign-up-wrapper").style.display = "none";
   
 }
fadeIn();
 
}

window.addEventListener("DOMContentLoaded", load);