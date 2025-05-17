const error_name=document.getElementById("error-name");
const error_phone=document.getElementById("error-phone");
const error_email=document.getElementById("error-email");
const error_message=document.getElementById("error-message");
const error_button=document.getElementById("error-button");

//input text temizlenmiyor



function validateName() {
    
    var name=document.getElementById("contact-name").value;
    if(name.length==0)
    {
        error_name.innerHTML="Name is required!";
        return false;
    }
    if(!name.match(/[A-Za-z]/g)) {
        error_name.innerHTML = 'You may only enter string characters in this field.';
       
        return false; 
      }
  
    error_name.innerHTML='<i class="fas fa-circle-check"></i>';
    return true;
}

function validatePhone(){

    var phone=document.getElementById("contact-phone").value;
    if(phone.length==0)
    {
        error_phone.innerHTML="Phone-no is required!";
        return false;
    }
    
    if(phone.length!==10 )
    {
        error_phone.innerHTML="Phone-no lenght should be 10 characters!";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        error_phone.innerHTML = 'Only digits please!';
        return false; 
      }

    error_phone.innerHTML='<i class="fas fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    
    var email=document.getElementById("contact-email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.length==0)
    {
        error_email.innerHTML="Email is required!";
        return false;
    }
    if (!email.match(validRegex)) {
        error_email.innerHTML="Email invalid adress!";
        return false;
    
      }
    error_email.innerHTML='<i class="fas fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message=document.getElementById("contact-message").value;
    var required=30;
    var left=required-message.length;

    if(left>0){
        error_message.innerHTML=left+" more characters required!";
        return false;
    }
    if(message.length==0)
    {
        error_message.innerHTML="Message is required!";
        return false;
    }
    if(message.length<30)
    {
        error_message.innerHTML="Message length should be 30 characters!";
        return false;
    }
    error_message.innerHTML='<i class="fas fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail || !validateMessage )
    {
        error_button.style.display="block";
        error_button.innerHTML="Please fix error!";
        setTimeout(function() {error_button.style.display="none";},3000);
        return false;

    }
    else{
        error_button.innerHTML='<i class="fas fa-circle-check"></i>';
    }
}

