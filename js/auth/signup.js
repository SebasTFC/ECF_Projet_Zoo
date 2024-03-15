
const inputNom =document.getElementById("InputNom");
const inputPrenom =document.getElementById("InputPrenom");
const inputEmail =document.getElementById("InputEmail");
const inputPassword =document.getElementById("InputPassword");
const inputValidateInputPassword =document.getElementById("ValidateInputPassword");
const btnValidation = document.getElementById("btn-validation-inscription");


inputNom.addEventListener("keyup",validateForm);
inputPrenom.addEventListener("keyup",validateForm);
inputEmail.addEventListener("keyup",validateForm);
inputPassword.addEventListener("keyup",validateForm);
inputValidateInputPassword.addEventListener("keyup",validateForm);


function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword,inputValidateInputPassword);

        if(nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk){
            btnValidation.disabled = false;}
        else{ btnValidation.disabled = true;
        }
    }

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateConfirmationPassword(inputPwd,inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }else{
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.add("is-invalid");
        return false;
    }
}
