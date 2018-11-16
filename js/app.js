//variables
const sendBtn=document.getElementById("sendBtn"),
       email=document.getElementById("email"),
       subject=document.getElementById("subject"),
       message=document.getElementById("message"),
       resetBtn=document.getElementById("resetBtn"),
       sendEmailform=document.getElementById("email-form")


// eventlisteners

eventlistener();
function  eventlistener(){

    document.addEventListener("DOMContentLoaded",appInit);
    email.addEventListener("blur",validateField);
     subject.addEventListener("blur", validateField);
       message.addEventListener("blur",validateField);
       sendEmailform.addEventListener("submit",sendEmail);
       resetBtn.addEventListener("click",resetForm)

}


//functions 
function appInit(){
  //disable the btn
  sendBtn.disabled=true;
     
}
function sendEmail(e){
   e.preventDefault();

    const spinner=document.querySelector("#spinner");
    spinner.style.display="block";

    const sendImage=document.createElement("img");
    sendImage.src="img/mail.gif";
    sendImage.style.display="block"

    setTimeout(function(){
    spinner.style.display="none";
    document.querySelector("#loaders").appendChild(sendImage);
     setTimeout(function(){
         sendEmailform.reset();
       sendImage.remove();

     },5000);
    },3000)

}
function validateField(){
    let errors;
   //validate the lengths of field
    validatelength(this)

    if(this.type==="email"){
    validateEmail(this)

    }
    //if both return errors
   errors=document.querySelectorAll(".error")    

    if(email.type!==""&&subject.value!==""&&message.value!==""){
      if(errors.length===0){
// if their is no error  the button is enabled

       sendBtn.disabled=false;

      }

    }

}
function  validatelength(field){
  if(field.value.length>0){
    field.style.borderBottomColor="green";
    field.classList.remove("error")

  }else {
         field.style.borderBottomColor = "red";
         field.classList.add("error")
 
  }

}
function validateEmail(field){
   let emailText=field.value;
   if(emailText.indexOf("@")!==-1)   
        {
            field.style.borderBottomColor = "green";
            field.classList.remove("error")

        } else {
            field.style.borderBottomColor = "red";
            field.classList.add("error")

        }

}



function resetForm(){
 sendEmailform.reset();

}
