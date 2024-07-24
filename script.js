const signupButton=document.getElementById("signupButton")
const SignIn=document.getElementById("SignIn")
const SignInform=document.getElementById("SignIn")
const signupform=document.getElementById("SignUp")

signupButton.addEventListener('click'), function(){
    signupform.style.display="none";
    signupButton.style.display="block";

}
SignIn.addEventListener('click'), function(){
    signInform.style.display="block";
    signupButton.style.display="none";
}
