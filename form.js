let form = document.getElementById("form");
let username= document.getElementById("username");
let password = document.getElementById("password");
let errormessages = document.getElementById("errormessages");

//form submit 
form.addEventListener("submit",e=>
{
    e.preventDefault();
    let message =[];
    if(username.value === "" || username.value === null){
        message.push("<p>Username is required</p>");
    }
    if(password.value === "" || password.value === null){
        message.push("<p>Password is required</p>");
    }
    if(password.value.length < 6)
    {
       message.push("<p>Password should be mininum of 6 Characters</p>"); 
    }
    if(message.length > 0){
        errormessages.innerHTML = message.join(" ");
    }
    else {
        console.log(username.value+" "+password.value);
    }
    // console.log(message);
});

// Implement the Code for making 