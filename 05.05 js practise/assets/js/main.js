// function input(){
//     var y=document.getElementsByName("name")
//     if(y.name==="password"){
//         y.name="text"
//     }
//     else{
//         y.name="password";
//     }
// }

const password=document.getElementById("name2");
let icon=document.querySelector("i")
function input(){
    if(password.type=="password")
    {
     password.type="text";
        icon.setAttribute("class", "las la-eye")
    }
    else{
        password.type="password";
        icon.setAttribute("class", "las la-eye-slash")
    }
}