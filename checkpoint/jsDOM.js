let placeBnt =document.querySelectorAll('.plus-btn')
console.log(placeBnt)
for(let i=0; i<placeBnt.length;i++){
    placeBnt[i].addEventListener('click',function(){
            placeBnt[i].nextElementSibling.value++
            totalePrice()
    })
    
}

let placeMoin =document.querySelectorAll('.minus-btn')
console.log(placeMoin)
for(let i=0; i< placeMoin.length; i++){
    placeMoin[i].addEventListener('click',function(){
        if(placeMoin[i].previousElementSibling.value > 0){
            placeMoin[i].previousElementSibling.value--
        }
        totalePrice()
    })
    
}

function totalePrice (){
    let prix =document.getElementsByClassName('price')
    let quantity = document.getElementsByClassName('quan')
    let sum=0
    for(let i=0; i< prix.length; i++){
        console.log(sum)
        sum+=prix[i].innerText * quantity[i].value
       
    }
    
     
    document.getElementById('total').value=sum
}

let deletBtn = document.querySelectorAll('.delete-btn')
for (let i=0; i<deletBtn.length;i++){
    deletBtn[i].addEventListener('click', function(){
        deletBtn[i].parentElement.parentElement.remove()
        totalePrice()
    })
}

let likeBtn=document.querySelectorAll('.like-btn')
for (let i=0; i<likeBtn.length;i++){
    likeBtn[i].addEventListener('click',function(){
        likeBtn[i].classList.toggle("is-active")
    })
}



