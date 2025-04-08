// script.js


form.addEventListener("submit" , function(event){
event.preventDefault(); // Impede o envio do formulário padrão

var form = document.querySelector(".form");
var formtitulo = document.querySelector("#title").value;
var formdescricao = document.querySelector("#content").value;



var pTexto = document.createElement("p");
var h1Texto = document.createElement("h1");
var divTexto = document.createElement("div");
divTexto.classList.add("note");





h1Texto.textContent = formtitulo;
pTexto.textContent = formdescricao;

divTexto.appendChild(h1Texto);
divTexto.appendChild(pTexto);

var section = document.querySelector(".ns");
section.appendChild(divTexto);


})


