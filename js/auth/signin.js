
const InputEmail = document.getElementById("InputEmail");
const InputPassword = document.getElementById("InputPassword");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //ici il faudra appeler l'API
    if (InputEmail.value == "test@mail.com" && InputPassword.value == "123") {
        alert("bon");
        // il faudra recuperer le vrai token
        const token = "shfjdhfjdfhdjhfdjhfdtttttttteeeeeetf";
        setToken(token);
        // placer ce token en cookie
        setCookie(roleCookieName, "admin", 7);
        window.location.replace("/");
    } else {
        InputEmail.classList.add("is-invalid");
        InputPassword.classList.add("is-invalid");
    }
}