let menuContratar  = document.querySelector(".contratar");
let menuContrataContainer = document.querySelector(".contratarContainer");
let compraLadrao = document.querySelector("#compraLadrao");
let gameBoard = document.querySelector(".game-board")



menuContratar.addEventListener("click", function () {
    const currentDisplay = window.getComputedStyle(menuContrataContainer).display;


    if (currentDisplay === "flex") {
        menuContrataContainer.style.display = "none";
    } else {
        menuContrataContainer.style.display = "flex";
    }
});


compraLadrao.addEventListener("click", function(){
    const currentDisplayLadrao = window.getComputedStyle(ladrao).display;
    compraLadrao.classList.add("compraLadrao2")
    setTimeout(function(){
        compraLadrao.classList.remove("compraLadrao2")

    },200)
    


    if(ouro >= 200 && currentDisplayLadrao === "none"){
        ouro = ouro - 200
        pontos.textContent = ouro;
        ladrao.style.display = "block";
    }
    

})

