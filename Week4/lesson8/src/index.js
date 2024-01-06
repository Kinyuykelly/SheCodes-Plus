// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`
function display(){
    alert("It is 18 degrees")
}
display();
let message = document.querySelector("button");
message.addEventListener("click", display);
// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
function label(){
    message.innerHTML = "18 degrees"
}
label();
message.addEventListener("click", label);
