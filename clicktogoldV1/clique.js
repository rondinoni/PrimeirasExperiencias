let pontos = document.querySelector(".pontos");
let ouro = parseInt("0");

let ladrao = document.querySelector("#ladrao");

let moeda = document.querySelector(".moeda");

moeda.addEventListener("mousedown",function(){
    moeda.classList.add("moeda2");
    pontos.textContent = (ouro);
    ouro += 1;
    if (ladrao.style.display == "block"){
        ouro += 9
    }


    
})

moeda.addEventListener("mouseup", function(){
    moeda.classList.remove("moeda2");
})