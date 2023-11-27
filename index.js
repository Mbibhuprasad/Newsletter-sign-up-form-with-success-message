let firstCard = document.getElementById("container");
let secondCard = document.getElementById("success-page");
let error = document.getElementById("error");
let mailBox =document.getElementById("mail");
let button =document.getElementById("sub-btn");
let dismiss =document.getElementById("dismiss-btn");
let shown =document.getElementById("shown");


button.addEventListener('click',function (e){
    if(mailBox.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.+[com]+$/)){
        secondCard.style.display="block";
        firstCard.style.display="none";
    }else{
        error.style.display="block";
        mailBox.style.backgroundColor="hsl(4, 100%, 88%)";
        mailBox.style.borderColor="hsl(4, 100%, 67%)";
        mailBox.addEventListener('click',function (e){
            error.style.display="none";
            mailBox.style.backgroundColor="white";
        })
    }
    shown.innerHTML=mailBox.value;
})

dismiss.addEventListener('click', function(e){
    secondCard.style.display="none";
    firstCard.style.display="flex";
})
