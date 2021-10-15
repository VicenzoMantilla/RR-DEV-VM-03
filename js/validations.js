let Name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword= document.getElementById("confirmPassword");
let idNumber= document.getElementById("idNumber");
let city= document.getElementById("city");
let zipCode= document.getElementById("zip");
let adress= document.getElementById("adress");
let age= document.getElementById("age");
let cellphone= document.getElementById("cellphone");
let message = document.getElementsByClassName("message")

/*-- ERRORS --*/
function success(i){
    message[i].classList.add('success');
    message[i].innerHTML="all pass";
}
function error(i){
    message[i].classList.add('error');
    message[i].innerHTML="all pass";
}
function remove(i){
    message[i].classList.remove('error');
    message[i].classList.remove('success');
    message[i].innerHTML=("");
}
/*--- NAME ---*/
function nameVerify(){
    let nameControl= Name.value;
    let symbolsName = /([@"'.?*+^$#])/;
    let numbersName = /[0-9]/;
    if (
        nameControl !== "" &&
        nameControl.length > 0 &&
        nameControl.length >= 8 &&
        nameControl.indexOf(' ') >= 1 &&
        !nameControl.match(symbolsName)&&
        !nameControl.match(numbersName)
        ){
        return true
    }else{
        return false
    }
}
Name.addEventListener("blur",()=>{
    if (nameVerify()){
        success(0);
    }else{
        error(0);
    }
})
Name.addEventListener("focus",()=>{
    remove(0);
})
/*--- MAIL ---*/
function emailVerify(){
    let emailControl = email.value;
    let dotCom= /.com/;
    let tag = /@/;
    let emailSymbols = /(?<=@)[a-z]/;
    if(
        emailControl !== "" &&
        emailControl.length >= 6 &&
        emailControl.match(dotCom) &&
        emailControl.match(tag) &&
        emailControl.match(emailSymbols)
    ){
        return true
    }else{
        return false
    }
}
email.addEventListener("blur",()=>{
    if(emailVerify()){
        success(1);
    }else{
        error(1);
    }
})
email.addEventListener("focus",()=>{
    remove(1);
})
/*--- PASSWORD ---*/
function passwordVerify(){
    let passwordControl = password.value;
    let upperLetter = /[A-Z]/;
    let lowerLetter = /[a-z]/;
    let numberContain = /[0-9]/;
    if(
        passwordControl != '' &&
        passwordControl != null &&
        passwordControl.length >= 8 &&
        passwordControl.length <= 25 &&
        passwordControl.match(upperLetter) &&
        passwordControl.match(lowerLetter) &&
        passwordControl.match(numberContain)
    ){
        return true
    }else{
        return false
    }
}
password.addEventListener("blur",()=>{
    if (passwordVerify()){
        success(2);
    }else{
        error(2);
    }
})
password.addEventListener("focus",()=>{
    remove(2);
})
/*--- CONFIRMPASS ---*/
function confirmVerify(){
    let confirmControl = confirmPassword.value;
    if(
        confirmControl != "" &&
        confirmControl != null &&
        confirmControl === password.value
    ){
        return true
    }else{
        return false
    }
}
confirmPassword.addEventListener("blur",()=>{
    if (confirmVerify()){
        success(3);
    }else{
        error(3);
    }
})
confirmPassword.addEventListener("focus",()=>{
    remove(3);
})

/*--- IDNUMBER ---*/

/*--- CITY ---*/

/*--- ZIP CODE ---*/

/*--- ADRESS ---*/

/*--- AGE ---*/

/*--- CELLPHONE ---*/