let img = document.querySelector("#images img");
let dh1=""
let dimg=""
let dp=""
let dogSection = document.querySelector("#dogSection");




var imagesStorage = [`./images/A pets is like a main.webp`,
    `./images/Perfect choice main.webp`,
    `./images/main image.jpg`,
    `./images/dog main.jpg`
]
var dogStorage = [{ id: "Labrador Retriver", src: "./images/Dog Photos/lab.jpg", p: `The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct Pleistocene wolves, and the modern wolf is the dog's nearest living relative. The dog was the first species to be domesticated by humans` }, { id: "German Shepherd", src: `./images/Dog Photos/German.jpg`, p: `The German Shepherd, also known in Britain as an Alsatian, is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899. It was originally bred as a herding dog, for herding sheep.` }, { id: "Siberian Husky", src: `./images/Dog Photos/Husky.jpg`, p: `The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute.` }, { id: "Beagle", src: `./images/Dog Photos/Beagle.jpg`, p: `The beagle is a breed of small scent hound, similar in appearance to the much larger foxhound. The beagle was developed primarily for hunting hare, known as beagling.` }, { id: "Dachshund", src: `./images/Dog Photos/Dachshund.jpg`, p: `The dachshund, also known as the wiener dog, badger dog, doxie, and sausage dog, is a short-legged, long-bodied, hound-type dog breed. The dog may be smooth-haired, wire-haired, or long-haired. Coloration varies.` }, { id: "Rottweiler", src: `./images/Dog Photos/Rottweiler.jpg`, p: `The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs, because their main use was to herd livestock and pull carts laden with butchered meat to market. ` }]


let index = 0;
let dindex = 0;
main()

function auto() {
    index = (index + 1) % imagesStorage.length;
    img.src = imagesStorage[index];
}

function showdog() {
    dh1.innerHTML=dogStorage[dindex].id;
    dimg.src = dogStorage[dindex].src;
    dp.innerHTML = dogStorage[dindex].p;
}

function dogimg() {
    let leftarrow = document.querySelector("#l");
    let rightarrow = document.querySelector("#r");
    console.log(leftarrow);
    console.log(rightarrow);
    leftarrow.addEventListener("click",()=>{
        dindex = (dindex - 1 + dogStorage.length) % dogStorage.length;
        showdog();
    })
    rightarrow.addEventListener("click", () => {
        dindex = (dindex + 1) % dogStorage.length;
        showdog();
    })
}



function dog() {
    dogStorage.forEach((e) => {
        dogSection.innerHTML =
            `<h1>${e.id}</h1>
        <div id="dog">
            <i id="l" class="fa-solid fa-angle-left fa-beat-fade" style="font-size: 1.5rem; cursor: pointer;"></i>
        <div id="dogImage">
            <img src="${e.src}" alt="">
        </div>
        <div id="dogContent">
            <p>${e.p}</p>
            <button>Know More..</button>
        </div>
        <i id="r" class="fa-solid fa-angle-right fa-beat-fade" style="font-size: 1.5rem;cursor: pointer;"></i>
        </div>`
    })
    dh1=dogSection.querySelector("h1")
    dimg=dogSection.querySelector("img")
    dp=dogSection.querySelector("p")
    dh1.innerHTML=dogStorage[dindex].id;
    dimg.src = dogStorage[dindex].src;
    dp.innerHTML = dogStorage[dindex].p;

}

// function scrollingNavbar(){
//     window.addEventListener("scroll",function(){
//         var navbar=document.querySelector("#navbar");
//         if (window.scrollY>100) 
//         {
            
//             navbar.style.position="fixed";
//         }else{
//             navbar.style.background="transparent";
//             navbar.style.position="absolute";
//         }
//     });
// }

function main() {
    setInterval(auto, 5000)
    dog()
    dogimg()
    // scrollingNavbar()
}


// ===============================

