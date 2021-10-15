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
let message = document.getElementsByClassName("message");
let register = document.getElementById("suscribeButton");
let completeAuto = document.getElementById("completeAuto");
/*-- ERRORS --*/
function success(i,text){
    message[i].classList.add('success');
    message[i].innerHTML= text;
}
function error(i,text){
    message[i].classList.add('error');
    message[i].innerHTML= text;
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
        text= "Validated ield";
        success(0,text);
    }else{
        text= "Name must contain a space and 6 characters."
        error(0,text);
    }
})
Name.addEventListener("focus",()=>{
    remove(0);
    
})
/*---- BONUS ---*/
function dynamicText(e){
    completeAuto.innerHTML= 'HELLO'+' '+e.target.value+'!';
}
Name.addEventListener("keydown",dynamicText);
Name.addEventListener("keyup",dynamicText);
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
        text = "Validated Field";
        success(1,text);
    }else{
        text = "This email format is Incorrect, Try again";
        error(1,text);
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
        text= "Validated Field";
        success(2,text);
    }else{
        text = "Password must contain at least 8 characters, a number, 1 uppercase letter & 1 lowercase letter";
        error(2,text);
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
        text= "Validated Field";
        success(3,text);
    }else{
        text = "The passwords are not equal";
        error(3,text);
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
        text= "Validated Field";
        success(4,text);
    }else{
        text = "The number must have between 7 & 8 numbers";
        error(4,text);
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
        text= "Validated Field";
        success(5,text);
    }else{
        text = "The city must have at least 3 characters";
        error(5,text);
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
        zipControl.length <= 5 &&
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
        text= "Validated Field";
        success(6,text);
    }else{
        text = "Zip code must have between 3 & 5 characters";
        error(6,text);
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
        text= "Validated Field";
        success(7,text);
    }else{
        text = "The adress must have 5 characters, with numbers, letters & a space in the middle";
        error(7,text);
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
        !isNaN(ageControl) &&
        ageControl >= 18 &&
        ageControl.indexOf('.') == -1 &&
        !ageControl.match(lettersContain)
    ){
        return true
    }else{
        return false
    }
}
age.addEventListener("blur",()=>{
    if(ageVerify()){
        text= "Validated Field";
        success(8,text);
    }else{
        text = "You must be 18 or older" ;
        error(8,text);
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
        !isNaN(cellphoneControl)&&
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
        text= "Validated Field";
        success(9,text);
    }else{
        text = "Cellphone must have at least 7 numbers, with no special characters"; 
        error(9,text);
    }
})
cellphone.addEventListener("focus",()=>{
    remove(9);
})
/* --- BUTTON ---- */
function buttonVerify(){
    let errorsMessages = [];
    let validationPass = [];
    let listErrors = document.getElementsByClassName("message");
    let validData = document.querySelectorAll('.fields > input');
    for(i=0 ; i < listErrors.length; i++){
        if (listErrors[i].classList.contains("error")){
            errorsMessages.push(listErrors[i].textContent);
        }
    }
    for(i=0 ; i < listErrors.length; i++){
        if (listErrors[i].classList.contains("success")){
            validationPass.push(validData[i].value);
        }
    }
    if(errorsMessages.length !== 0){
        alert(errorsMessages);
    }else{
        alert(validationPass);
    }
}
register.addEventListener("click",()=>{
    buttonVerify();
})

