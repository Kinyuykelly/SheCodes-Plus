// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`
let message = document.querySelector("button");
message.addEventListener("click", display, label);
function display(){
    alert("It is 18 degrees")
}
display();
// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
function label(){
    message.innerText = "18 degrees"
}
label();

