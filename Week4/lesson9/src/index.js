let clickMe = document.querySelector("#special-button");
     clickMe.addEventListener("click", function(){
        alert("Hooray");
     });
let submitform = document.querySelector("#password-form");
submitform.addEventListener("submit", function(){
    let password = document.querySelector("#password-input").value;
    alert(password);
});
let submit = document.querySelector("#signup-form");
submit.addEventListener("submit", function(){
    let email = document.querySelector("#email-input").value;
    let username = document.querySelector("#username-input").value;
    alert(`${email} and ${username}`);
});
