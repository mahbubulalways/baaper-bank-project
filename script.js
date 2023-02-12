// step 1 add click event handler
document.getElementById("login-btn").addEventListener("click", function(){
//  step 2 get the email address inside of the input
const userEmail=document.getElementById("user-email") ;
const email=userEmail.value
const userPass=document.getElementById("user-pass")
const password = userPass.value

// do not use this process ,as a bigener use it just for seen
if(email==="example@gmail.com" && password === "login"){
    window.location.href="bank.html";
}
else{
    alert("invalid email or password")
}
})




























