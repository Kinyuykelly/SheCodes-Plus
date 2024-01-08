let clickMe = document.querySelector("#special-button");
     clickMe.addEventListener("click", function(){
        alert("Hooray");
     });
let submitform = document.querySelector("#submitbtn");
submitform.addEventListener("click", function(){
    let password = document.querySelector("#password-input").value;
    alert(password);
});
let submit = document.querySelector("#btnsubmit");
submit.addEventListener("click", function(){
    let email = document.querySelector("#email-input").value;
    let username = document.querySelector("#username-input").value;
    alert(`${email} and ${username}`);
});
