/* --- SELECTORS */
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
/*--- EMAIL ---*/
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
        passwordControl !== '' &&
        passwordControl !== null &&
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
        confirmControl !== "" &&
        confirmControl !== null &&
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
function idNumberVerify(){
    let idNumberControl = idNumber.value;
    if(
        idNumberControl !== '' &&
        idNumberControl !== null &&
        idNumberControl.length >= 7 &&
        idNumberControl.length <= 8
    ){
        return true
    }else{
        return false
    }
}
idNumber.addEventListener("blur",()=>{
    if(idNumberVerify()){
        success(4);
    }else{
        error(4);
    }
})
idNumber.addEventListener("focus",()=>{
    remove(4);
})
/*--- CITY ---*/
function cityVerify(){
    let cityControl = city.value;
    let numberContain = /[0-9]/;
    if (
        cityControl !== '' &&
        cityControl !== null &&
        cityControl.length >= 3 &&
        !cityControl.match(numberContain)
    ){
        return true
    }else{
        return false
    }
}
city.addEventListener("blur",()=>{
    if(cityVerify()){
        success(5);
    }else{
        error(5);
    }
})
city.addEventListener("focus",()=>{
    remove(5);
})
/*--- ZIP CODE ---*/
function zipVerify(){
    let zipControl = zipCode.value;
    let upperLetter = /[A-Z]/;
    let lowerLetter = /[a-z]/;
    if(
        zipControl !== '' &&
        zipControl !== null &&
        zipControl.length >= 3 &&
        !zipControl.match(upperLetter) &&
        !zipControl.match(lowerLetter)
    ){
        return true
    }else{
        return false
    }
}
zipCode.addEventListener("blur",()=>{
    if(zipVerify()){
        success(6);
    }else{
        error(6);
    }
})
zipCode.addEventListener("focus",()=>{
    remove(6);
})
/*--- ADRESS ---*/
function adressVerify(){
    let adressControl = adress.value;
    let numberContain = /[0-9]/;
    let lettersContain = /[A-Za-z]/;
    if(
        adressControl !== '' &&
        adressControl !== null &&
        adressControl.length >= 5 &&
        adressControl.indexOf(' ') >= 1 &&
        adressControl.match(numberContain) &&
        adressControl.match(lettersContain)
    ){
        return true
    }else{
        return false
    }
}
adress.addEventListener("blur",()=>{
    if(adressVerify()){
        success(7);
    }else{
        error(7);
    }
})
adress.addEventListener("focus",()=>{
    remove(7);
})
/*--- AGE ---*/
function ageVerify(){
    let ageControl = age.value;
    let lettersContain = /[A-Za-z]/;
    if(
        ageControl !== '' &&
        ageControl !== null &&
        ageControl >= 18 &&
        !ageControl.match(lettersContain)
    ){
        return true
    }else{
        return false
    }
}
age.addEventListener("blur",()=>{
    if(ageVerify()){
        success(8);
    }else{
        error(8);
    }
})
age.addEventListener("focus",()=>{
    remove(8);
})
/*--- CELLPHONE ---*/
function cellphoneVerify(){
    let cellphoneControl = cellphone.value;
    let symbols = /(-)/;
    if(
        cellphoneControl !== '' &&
        cellphoneControl !== null &&
        cellphoneControl.length >= 7 &&
        cellphoneControl.indexOf(' ') == -1 &&
        !cellphoneControl.match(symbols)
    ){
        return true
    }else{
        return false
    }
}
cellphone.addEventListener("blur",()=>{
    if(cellphoneVerify()){
        success(9);
    }else{
        error(9);
    }
})
cellphone.addEventListener("focus",()=>{
    remove(9);
})
/* --- BUTTON ---- */