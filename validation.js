$(document).ready(function(){
    $("#fname").validate({
        rules:{
            fname:{
                required:true,
                
            },
            lname:{
                required:true,
                email:true
            }
        },
        messages:{
            fname:{
                required:"Please enter your name."
            },
            lname:{
                required:"Please enter your email."
            }
        }
    })
})