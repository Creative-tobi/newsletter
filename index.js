var btn = document.getElementById("btn");
let input = document.getElementById("input");
let errorState = document.getElementById("errorState");

function subscribe(){
  if((input.value).includes("@") && (input.value).includes(".")){
    input.style.borderColor = "green"; 
    window.location.href = "alert.html"
  } else{
    errorState.innerHTML = "Invalid email address";
    errorState.style.color = "red";
    input.style.borderColor = "red"; 
    console.log("invalid mail");
    
  }
}

btn.addEventListener("click", subscribe)