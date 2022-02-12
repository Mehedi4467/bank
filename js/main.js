document.getElementById('login-submit').addEventListener('click', function(){
    // user email fild
    const userEmail = document.getElementById('mail');
    // user password fildd
    const userPassword = document.getElementById('password');
    
    if (userEmail.value == "amarpagli@gmail.com" && userPassword.value == "Samanta44676835"){
        window.location.href="banking.html";
    }
    else{
        const errorMassage = document.getElementById('error-massage');
        errorMassage.innerText = 'Invalid Email or Password';
    }
})