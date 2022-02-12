//deposit section js start here
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositFild = document.getElementById('deposit');
    const depositBox = document.getElementById('deposit-box');
    const balance = document.getElementById('balance');
    const balanceNumberConvert = parseFloat(balance.innerText);
    const priviseAmount = parseFloat(depositBox.innerText);
   

   if(depositFild.value != ''){
    let totalBalance =  parseFloat(depositFild.value) + balanceNumberConvert;
    let totalAmount = parseFloat(depositFild.value) + priviseAmount;
    
    balance.innerText = totalBalance;
    depositBox.innerText = totalAmount;
    document.getElementById('deposit-error').style.display = 'none';
   }
   else{
       document.getElementById('deposit-error').innerText = "Please Enter Amount";
   }
    // clear the deposit input fild
    depositFild.value = '';
    

});
document.getElementById('withdraw-button').addEventListener('click', function(){
    const balance = document.getElementById('balance');
    const withdrawError = document.getElementById('withdraw-error');
    const withdrawInput = document.getElementById('withdraw');
    const withdrawText = document.getElementById('withdraw-text');
    
    if(withdrawInput.value != ''){
        let totalWithdraw = parseFloat(withdrawInput.value) + parseFloat(withdrawText.innerText);
        withdrawText.innerText = totalWithdraw;
        let updateBalance =  parseFloat(balance.innerText) - parseFloat(withdrawInput.value);
        balance.innerText = updateBalance;


        withdrawError.style.display = 'none';
    }
    else{
        withdrawError.innerText = "Please Enter Withdraw Amount";
    }

    withdrawInput.value = '';
});