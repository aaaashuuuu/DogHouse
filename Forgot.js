var label = document.querySelector("#enum")
var num = document.querySelector("#num")
var password = document.querySelector("#password")
var button = document.querySelector("button")
var flag = true
var storage = JSON.parse(localStorage.getItem("Data"))
button.addEventListener("click",()=>{
    if(num.value == ``){
        password.innerHTML=`* Please enter the mobile number <br>`
        flag = false
    }

    for(var i = 0; i < storage.length; i++){
        if(num.value == storage[i].number){
            password.innerHTML = `Your password is ${storage[i].pass} <br>`
            flag=false  
        }
    }

    if(flag){
        password.innerHTML = `There is no account related to the mobile number entered`
        num.value = ``
    }

})