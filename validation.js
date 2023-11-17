var nameError=document.getElementById("name-error")
var emailError=document.getElementById("email-error")
var messageError=document.getElementById("message-error")
var submitError=document.getElementById("submit-error")

function validateName(){
    var name=document.getElementById("fname").value;

    if(name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write your full name";
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail(){
    var email =document.getElementById("lname").value;

    if(email.length==0)
    {
        emailError.innerHTML="Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML="Invalid email";
        return false;
    }
     emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
     return true;
}

function validateForm(){
    if(!validateName() || !validateEmail()){
        submitError.style.display="display";
        submitError.innerHTML="Please fix error to submit";
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}