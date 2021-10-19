/* --- SELECTORS */
var Name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPassword= document.getElementById('confirmPassword');
var idNumber= document.getElementById('idNumber');
var city= document.getElementById('city');
var zipCode= document.getElementById('zip');
var adress= document.getElementById('adress');
var age= document.getElementById('age');
var cellphone= document.getElementById('cellphone');
var message = document.getElementsByClassName('message');
var register = document.getElementById('suscribeButton');
var completeAuto = document.getElementById('completeAuto');
/*-- ERRORS --*/
function successValidation(i,text){
    message[i].classList.add('success');
    message[i].innerHTML = text;
}
function error(i,text){
    message[i].classList.add('error');
    message[i].innerHTML = text;
}
function removeMessage(i){
    message[i].classList.remove('error');
    message[i].classList.remove('success');
    message[i].innerHTML = ('');
}
/*--- NAME ---*/
function nameVerify(){
    let nameControl = Name.value;
    let symbolsName = /([@"'.?*+^$#])/;
    let numbersName = /[0-9]/;
    if (
        nameControl !== "" &&
        nameControl.length > 0 &&
        nameControl.length >= 8 &&
        nameControl.indexOf(' ') >= 1 &&
        !nameControl.match(symbolsName) &&
        !nameControl.match(numbersName)
        ){
        return true;
    }else{
        return false;
    }
}
Name.addEventListener('blur',()=>{
    if (nameVerify()){
        text = 'Validated field';
        successValidation(0,text);
    }else{
        text = 'Name must contain a space and 6 characters.'
        error(0,text);
    }
})
Name.addEventListener('focus',()=>{
    removeMessage(0);
    
})
/*---- BONUS ---*/
function dynamicText(e){
    completeAuto.innerHTML = 'HELLO'+' '+e.target.value+'!';
}
Name.addEventListener('keydown',dynamicText);
Name.addEventListener('keyup',dynamicText);
/*--- EMAIL ---*/
function emailVerify(){
    let emailControl = email.value;
    let dotCom = /.com/;
    let tag = /@/;
    let emailSymbols = /(?<=@)[a-z]/;
    if(
        emailControl !== '' &&
        emailControl.length >= 6 &&
        emailControl.match(dotCom) &&
        emailControl.match(tag) &&
        emailControl.match(emailSymbols)
    ){
        return true;
    }else{
        return false;
    }
}
email.addEventListener('blur',()=>{
    if(emailVerify()){
        text = 'Validated Field';
        successValidation(1,text);
    }else{
        text = 'Email needs to have @, 6 characters and .com';
        error(1,text);
    }
})
email.addEventListener('focus',()=>{
    removeMessage(1);
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
        return true;
    }else{
        return false;
    }
}
password.addEventListener('blur',()=>{
    if (passwordVerify()){
        text = 'Validated Field';
        successValidation(2,text);
    }else{
        text = 'Password needs to have 8 characters, a number, 1 uppercase letter & 1 lowercase letter';
        error(2,text);
    }
})
password.addEventListener('focus',()=>{
    removeMessage(2);
})
/*--- CONFIRMPASS ---*/
function confirmVerify(){
    let confirmControl = confirmPassword.value;
    if(
        confirmControl !== '' &&
        confirmControl !== null &&
        confirmControl === password.value
    ){
        return true;
    }else{
        return false;
    }
}
confirmPassword.addEventListener('blur',()=>{
    if (confirmVerify()){
        text = 'Validated Field';
        successValidation(3,text);
    }else{
        text = 'The passwords are not equal';
        error(3,text);
    }
})
confirmPassword.addEventListener('focus',()=>{
    removeMessage(3);
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
        return true;
    }else{
        return false;
    }
}
idNumber.addEventListener('blur',()=>{
    if(idNumberVerify()){
        text = 'Validated Field';
        successValidation(4,text);
    }else{
        text = 'The number must have between 7 & 8 numbers';
        error(4,text);
    }
})
idNumber.addEventListener('focus',()=>{
    removeMessage(4);
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
        return true;
    }else{
        return false;
    }
}
city.addEventListener('blur',()=>{
    if(cityVerify()){
        text = 'Validated Field';
        successValidation(5,text);
    }else{
        text = 'The city must have at least 3 characters';
        error(5,text);
    }
})
city.addEventListener('focus',()=>{
    removeMessage(5);
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
        return true;
    }else{
        return false;
    }
}
zipCode.addEventListener('blur',()=>{
    if(zipVerify()){
        text = 'Validated Field';
        successValidation(6,text);
    }else{
        text = 'Zip code must have between 3 & 5 characters';
        error(6,text);
    }
})
zipCode.addEventListener('focus',()=>{
    removeMessage(6);
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
        return true;
    }else{
        return false;
    }
}
adress.addEventListener('blur',()=>{
    if(adressVerify()){
        text = 'Validated Field';
        successValidation(7,text);
    }else{
        text = 'Address needs to have numbers,5 characters, letters & a space in the middle';
        error(7,text);
    }
})
adress.addEventListener('focus',()=>{
    removeMessage(7);
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
        return true;
    }else{
        return false;
    }
}
age.addEventListener('blur',()=>{
    if(ageVerify()){
        text = 'Validated Field';
        successValidation(8,text);
    }else{
        text = 'You must be 18 or older';
        error(8,text);
    }
})
age.addEventListener('focus',()=>{
    removeMessage(8);
})
/*--- CELLPHONE ---*/
function cellphoneVerify(){
    let cellphoneControl = cellphone.value;
    let symbols = /(-)/;
    if(
        cellphoneControl !== '' &&
        cellphoneControl !== null &&
        !isNaN(cellphoneControl) &&
        cellphoneControl.length >= 7 &&
        cellphoneControl.indexOf(' ') == -1 &&
        !cellphoneControl.match(symbols)
    ){
        return true;
    }else{
        return false;
    }
}
cellphone.addEventListener('blur',()=>{
    if(cellphoneVerify()){
        text = 'Validated Field';
        successValidation(9,text);
    }else{
        text = 'Cellphone needs to have 7 numbers, with no special characters'; 
        error(9,text);
    }
})
cellphone.addEventListener('focus',()=>{
    removeMessage(9);
})
/* --- BUTTON ---- */
function buttonVerify(){
    let errorsMessages = [];
    let validationPass = [];
    let listErrors = document.getElementsByClassName('message');
    let validData = document.querySelectorAll('.fields > input');
    for(i=0 ; i < listErrors.length; i++){
        if (listErrors[i].classList.contains('error')){
            errorsMessages.push(listErrors[i].textContent);
        }
    }
    for(i=0 ; i < listErrors.length; i++){
        if (listErrors[i].classList.contains('success')){
            validationPass.push(validData[i].value);
        }
    }
    if(errorsMessages.length !== 0){
        alert(errorsMessages);
    }else{
        alert(validationPass);
    }
}
/* --- FORM VALIDATION ---*/
function formEmpty(){
    let emptyFields = document.querySelectorAll('.fields > input');
    for( i = 0 ; i < emptyFields.length ; i++){
        if (emptyFields[i].value == '' || emptyFields[i].value == null){
            return true;
        }
    }
}
register.addEventListener('click',()=>{
    if(formEmpty()){
        alert('Fields cannot be left empty');
    }else{
        buttonVerify();
    }
})
