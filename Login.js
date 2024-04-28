var form = document.querySelector("#frm")
var user = document.querySelector("#un")
var pass = document.querySelector("#pw")
var button = document.querySelector("#log")
var eun = document.querySelector("#eun")
var epw = document.querySelector("#epw")
var ebtn = document.querySelector("#ebtn")
var cancel = document.querySelector("#cancel")
var flag = true
var storage = JSON.parse(localStorage.getItem("Data"))

form.addEventListener("submit",(ashu)=>{
    eun.innerHTML=""
    epw.innerHTML=""
    ebtn.innerHTML=""

    if(!user.value && !pass.value){
        eun.innerHTML = `*required Enter the username `
        epw.innerHTML = `*required Enter the password `
        ashu.preventDefault()
        flag = false
    } else if(!user.value){
        eun.innerHTML = `*required Enter the username `
        ashu.preventDefault()
        flag = false
    } else if(!pass.value){
        epw.innerHTML = `*required Enter the password `
        ashu.preventDefault()
        flag = false
    } 
    for(var i = 0; i < storage.length;i++){
        if(user.value ==storage[i].number && pass.value == storage[i].pass ){
            alert("Welcome to the Dog House")
            flag = false
        }
    }

    if(flag){
        ebtn.innerHTML = `* Invalid Username or Password`
        user.value = ``
        pass.value = ``
        ashu.preventDefault()
    }



    // else{
    //     ebtn.innerHTML = `*Invalid Username and Password`
    //     user.value = ``
    //     pass.value = ``
    //     ashu.preventDefault()
    // }

    


})

cancel.addEventListener("click",(ashu)=>{
    user.value = ``
    pass.value = ``
    ashu.preventDefault()
})