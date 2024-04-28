var form = document.querySelector("form")

var first = document.querySelector("#FN")

var efirst = document.querySelector("#efirst")

var last = document.querySelector("#LN")
var elast = document.querySelector("#elast")
var number = document.querySelector("#N")
var enumber = document.querySelector("#enumber")
var email = document.querySelector("#EM")
var eemail = document.querySelector("#eemail")
var pass = document.querySelector("#Pass")
var epass = document.querySelector("#epass")
var cpass = document.querySelector("#Cpass")
var ecpass = document.querySelector("#ecpass")
var button = document.querySelector("button")

var ca = document.querySelector("#ca")

var store = []

var local = JSON.parse(localStorage.getItem("Data"))

if(local){
    store = local
}

var k = true

button.addEventListener("click",(valid)=>{

    var regx=/^[a-zA-Z]{3,10}$/
    var regx1=/^[6-9][0-9]{9}$/
    var regx2=/^[a-zA-Z0-9!@]{6,15}$/

    if(first.value==""){
        efirst.innerHTML = `* First Name Required <br>`
        k = false
    }
    else if(regx.test(first.value)){
        efirst.innerHTML = ``
    }
    else{
        efirst.innerHTML=`Invalid First Name <br>`
        k = false
    }

    //==============================================================

    if(last.value==""){
        elast.innerHTML = `* Last Name Required <br>`
        k = false
    }
    else if(regx.test(last.value)){
        elast.innerHTML = ``
    }
    else{
        elast.innerHTML=`Invalid Last Name <br>`
        k = false
    }

    // =============================================================

    if(number.value=="") {
        enumber.innerHTML = `* Mobile Number Required <br>`
        k = false
    }
    else if(regx1.test(number.value)){
        enumber.innerHTML=``
    }
    else{
        enumber.innerHTML=`Invalid Mobile Number`
        k = false
    }

    // ===============================================================

    if(email.value==""){
        eemail.innerHTML = `* Email ID Required`
        k = false
    }
    else {
        eemail.innerHTML=""
    }
    // ========================================================== 

    if(pass.value==""){
        epass.innerHTML=`* Password Required`
        k = false
    }
    else if(regx2.test(pass.value)){
        epass.innerHTML=``
    } 
    else{
        epass.innerHTML=`Invalid Password`
        k = false
    }

    // ==================================================================

    if(cpass.value==pass.value){
        if(cpass.value==""){
            ecpass.innerHTML=`* Confirm Password Required`
            k = false;
        }else{
            ecpass.innerHTML=""
        }
    } 
    else {
        ecpass.innerHTML=`* Password is not matching`
        k = false
    }

    if(k){
        var ref = {
            first:first.value,
            last:last.value,
            number:number.value,
            email:email.value,
            pass:pass.value,
        }
        store.push(ref)
        localStorage.setItem("Data",JSON.stringify(store))
    } 
    else {
        valid.preventDefault()
    }
})

ca.addEventListener("click",(clear)=>{
    first.value=``
    efirst.innerHTML=``
    last.value=``
    elast.innerHTML=``
    number.value=``
    enumber.innerHTML=``
    email.value=``
    eemail.innerHTML=``
    pass.value=``
    epass.innerHTML=``
    cpass.value=``
    ecpass.innerHTML=``
    clear.preventDefault()
})