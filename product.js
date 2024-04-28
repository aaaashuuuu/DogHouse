var storage = [{ id: `div1`, src: `./images/Cart/for furry friends ( pro1).webp`, dec: `P.A.W.S SHAMPOO 500ML (SANITIZER SHAMPOO SERIES)`, price: `500 ₹`,rating: `<i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i>`,flag:false },
{ id: `div2`, src: `./images/Cart/P.A.W.S Spray for furry friends (pro2).webp`, dec: `PET'S ACTIVATED WATER SANITIZER (P.A.W.S) SPRAY`, price: `450 ₹`, rating: `<i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star-half-stroke fa-beat-fade" style="color: #f7fb0e;"></i>`,flag:false },
{ id: `div3`, src: `./images/Cart/P.A.W.S wipes for furry friends (pro3).webp`, dec: `REUSABLE WIPES COVERS FOR DOGS (NEW VERSION ETERNAL USE) `, price: `550 ₹`, rating: `<i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i>`,flag:false },
{ id: `div4`, src: `./images/Cart/P.A.W.S Wipes for furry friends (pro4).webp`, dec: `PET'S ACTIVATED WATER SANITIZER (P.A.W.S) 60PCS WIPES`, price: `400 ₹`, rating: `<i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i>`,flag:false },
{ id: `div5`, src: `./images/Cart/P.A.W.S 2LRefill for furry friends (pro5).webp`, dec: `PET'S ACTIVATED WATER SANITIZER (P.A.W.S) 2L REFILL`, price: `600 ₹`, rating: `<i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star-half-stroke fa-beat-fade" style="color: #f7fb0e;"></i>`,flag:false },
{ id: `div6`, src: `./images/Cart/Flea Tick Repellent Spray for furry friends (pro6).webp`, dec: `FLEA & TICK ACTIVE REPELLENT SPRAY (NEW VERSION FOR DOGS ONLY)`, price: `750 ₹`, rating: `<i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i><i class="fa-solid fa-star fa-beat-fade" style="color: #f7fb0e;"></i>`,flag:false }]

var main = document.querySelector("main")
var logo = document.querySelector(".fa-solid.fa-cart-shopping.fa-shake")
var popup = document.querySelector("#popup")
var close = document.querySelector(".fa-solid.fa-circle-xmark")
var dynamic = document.querySelector("#dynamic")
let atag=document.querySelector("a");
let product=document.querySelector("#products");

function openclose() {
    logo.addEventListener("click", () => {
        popup.style.right = `0%`
        popup.style.transition = `0.6s`
    })

    close.addEventListener("click", () => {
        popup.style.right = `-100%`
        popup.style.transition = `0.6s`
    })
}


function cart() {
    storage.forEach((e) => {
        main.innerHTML += `<div id=${e.id}>
        <img src="${e.src}" alt="">
        <h3>${e.dec}</h3>
        <div><span>${e.price}</span><span>${e.rating}</span></div>
        <button class="fav"><i class="fa-solid fa-cart-arrow-down fa-fade" style="color: #80d6d6;"></i></button>
        </div>`
    })
}

function addToCart() {
    var fav = document.querySelectorAll(".fav")

    fav.forEach((a) => {
        a.addEventListener("click", () => {
            popup.style.right = `0%`
            popup.style.transition = `0.6s`
            var parentid = a.parentElement.id
            storage.forEach((b) => {
                if (b.id == parentid && !b.flag) {
                    dynamic.innerHTML +=
                        `<div class="cont">
                            <img src="${b.src}" alt="">
                            <div>
                                <h4>${b.dec}</h4>
                                <p>${b.price}</p>
                                <input type="number" class="input">
                            </div>
                            <div id="span"><span class="sub">${b.price}</span><i class="fa-solid fa-trash-can" style="color: red;"></i></div>
                        </div>`
                        b.flag = true
                }
                remove()
                calculation()
                total()
            })
        })
    })
}

function remove(){
    var del = document.querySelectorAll(".fa-solid.fa-trash-can")
    del.forEach((c)=>{
        c.addEventListener("click",()=>{
            
            var parentelement = c.parentElement.parentElement
            var zeus = parentelement.querySelector("h4")

            storage.forEach((j)=>{
                if(j.dec == zeus.innerHTML){
                    j.flag = false;
                }
            })

            parentelement.remove()
            total()
        })
    })
}

function calculation(){
    var input = document.querySelectorAll(".input")
    input.forEach((d)=>{
        d.addEventListener("input",()=>{
            if(d.value < 1 || isNaN(d.value)){
                d.value = 1
            }

            var parent = d.parentElement.parentElement
            var price = parent.querySelector("p").innerHTML.replace(" ₹","")
            var subtotal = d.value*price
            var sub = parent.querySelector(".sub")
            sub.innerHTML = `${subtotal} ₹`
            total()
        })
    })

}

function total(){
    var gtotal = document.querySelector("#total")
    var gsub = document.querySelectorAll(".sub")
    var temp = 0
    gsub.forEach((f)=>{
        f = parseInt(f.innerHTML.replace(" ₹",""))
        temp += f
    })
    if(gsub.length>0){
        gtotal.innerHTML = `Total : ₹ ${temp}`
    }
    else{
        gtotal.innerHTML = `Total : `
    }
}

atag.addEventListener("click", function(){
   
    product.style.transition = `1s`
})

function shopping() {   
    cart()
    openclose()
    addToCart()
}

shopping()