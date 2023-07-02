$(function() {
  //The forcus and blur event: 
    var inputFields = $("input:text,input:password,textarea");
    inputFields.focus(function(){
        $(this).css("box-shadow","0 0 4px #666");
    });
    //Trong jQuery, blur là một sự kiện được sử dụng để phát hiện khi một phần tử mất trạng thái focus. 
    inputFields.blur(function(){
        $(this).css("box-shadow","none");
    });
    $("#name").blur(function(){
        var text = $(this).val();
        if(text.length<3){
            $(this).css("box-shadow","0 0 4px #811");
        }
        else{
              $(this).css("box-shadow","0 0 10px #181"); 
        }
    });



    //Change event: Sự kiện thay đổi đặc biệt hữu ích cho radio, checkbox, selected element
    $("#checkbox").change(function(){
        var isCheck = $(this).is(":checked"); //prop("checked")
        if(isCheck){
            $(this).add("label[for='cb']").css("box-shadow","0 0 4px #181");
        }
        else{
             $(this).add("label[for='cb']").css("box-shadow","0 0 4px #811");
        }
    });


    $("#selection").change(function(){
        var selectedOption = $(this).find(":selected").text();
        alert(selectedOption);
    });


    //Handling submit event: sự kiện gửi
    $("#form").submit(function(event){
        var textarea = $("#message");
        if(textarea.val().trim()==""){
            textarea.css("box-shadow","0 0 10px #811");
            // điều này sẽ ngăn chặn bất kì hành động mặc định nào thường xảy ra
            // khi bạn nhấp vào sự kiện đó hoặc khi sự kiện đó xảy ra
            event.preventDefault();
        }else{
             //form will be submited
        }
    });



    // Coding activity: Complete form validation on submit
    //Fast feedback form
    var form = $("#form");  
    enableFastFeedback(form);


    form.submit(function(event){
        var name = $("#name").val();
        var pass = $("#password").val();
        var message =  $("#message").val();
        // checkBox này sẽ trả về boolean : đã chọn hay chưa
        var checkBox =  $("#checkbox").is(":checked");
        validateNameField(name, event); 
        validatePasswordField(pass,event);
        validateMessageField(message,event);
        validateCheckBoxField(checkBox,event);
    });
});


function enableFastFeedback(formElement){
    var nameInput = formElement.find("#name");
    var passInput = formElement.find("#password");
    var messInput = formElement.find("#message");
    var checkboxInput = formElement.find("#checkbox");

    nameInput.blur(function(event){
        var name = $(this).val();
        validateNameField(name,event);
        if(!isValidName(name)){
        $(this).css({"box-shadow":"0 0 6px #811" , "border":"1px solid #600"});
        }else{
            $(this).css({"box-shadow":"0 0 6px #181",  "border":"1px solid #060"});
        }
    });

    passInput.blur(function(event){
        var pass = $(this).val();
        validatePasswordField(pass,event);
        if(!isValidPass(pass)){
        $(this).css({"box-shadow":"0 0 6px #811" , "border":"1px solid #600"});
        }else{
            $(this).css({"box-shadow":"0 0 6px #181",  "border":"1px solid #060"});
        }
    });
    messInput.blur(function(event){
        var mess = $(this).val();
        validateMessageField(mess,event);
        if(!isValidMessage(mess)){
        $(this).css({"box-shadow":"0 0 6px #811" , "border":"1px solid #600"});
        }else{
            $(this).css({"box-shadow":"0 0 6px #181",  "border":"1px solid #060"});
        }
    });
     checkboxInput.change(function(event){
        var checkBox = $(this).is(":checked");
        validateCheckBoxField(checkBox,event);
        if(!checkBox){
        $(this).css({"box-shadow":"0 0 6px #811" , "border":"1px solid #600"});
        }else{
            $(this).css({"box-shadow":"0 0 6px #181",  "border":"1px solid #060"});
        }
    });

}

function validateNameField(name, event){
    if(!isValidName(name)){
        $("#name-feedback").text("Please enter name at least two character");
        event.preventDefault();
    }
    else{
         $("#name-feedback").text("");
    }
}
function validatePasswordField(password, event){
    if(!isValidPass(password)){
        $("#password-feedback").text("The password should have at least 6 characters and contain a number");
        event.preventDefault();
    }
    else{
         $("#password-feedback").text("");
    }   
}
function validateMessageField(message, event){
    if(!isValidMessage(message)){
        $("#message-feedback").text("Please enter a message");
        event.preventDefault();
    }
    else{
         $("#message-feedback").text("");
    }   
}
function validateCheckBoxField(isChecked, event){
    if(!isChecked){
        $("#checkbox-feedback").text("Please agree to this");
        event.preventDefault();
    }
    else{
         $("#checkbox-feedback").text("");
    }   
}


function isValidName(name){
    return name.length >= 2;    
}
function isValidPass(password){
    return password.length >= 6 && /.*[0-9].*/.test(password);
}
function isValidMessage(message){
    return message.trim() != "";
}


