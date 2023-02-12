document.getElementById("deposit-btn").addEventListener("click", function(){
    const deposit=document.getElementById("deposit");
    const newAmountString = deposit.value;
     const newAmount=parseFloat(newAmountString)
     document.getElementById("deposit").value="";
     if(isNaN( newAmount)){
        alert("please provide a valid number")
       return
    }

    //   step 2
    const depositAmount=document.getElementById("deposit-amount")
    const previAmountString=depositAmount.innerText
     const previAmount=parseFloat(previAmountString)
     
    const total=newAmount+ previAmount
    depositAmount.innerText= total

 const balance=document.getElementById("balance")
    const balanceString=balance.innerText
    const addBalance= parseFloat(balanceString)
    balance.innerText=total+addBalance
   
})

document.getElementById("withdraw-btn").addEventListener("click", function(){
    const withdraw=document.getElementById("withdraw");
    const withdrawString=withdraw.value
    const newWithdraw= parseFloat(withdrawString)
    document.getElementById("withdraw").value=""
    if(isNaN( newWithdraw)){
        alert("please provide a valid number")
       return
    }
 
   
// step 2
    const withdrawAmount=document.getElementById("withdraw-amount");
    const withdrawAmountString= withdrawAmount.innerText
   const priviWithdraw=parseFloat(withdrawAmountString)
   const totalWithdraw=newWithdraw+priviWithdraw
  

//    step 3
    const balance=document.getElementById("balance")
    const balanceString=balance.innerText
    const addBalance= parseFloat(balanceString)
    
    if(newWithdraw>addBalance ){
        alert("not enough money")
        return
    }
  
   
    withdrawAmount.innerText=totalWithdraw
    balance.innerText=addBalance-totalWithdraw
    
})




   document.getElementById("back-btn").addEventListener("click", function(){
    window.location.href="index.html"
})


