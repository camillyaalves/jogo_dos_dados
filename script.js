//Imagem aleatória Player 1
//Número de 1 a 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

//Pegar imagem aleatória (imagens/dice1.png até imagens/dice6.png)
var randomImageSource = "imagens/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource);


//Imagem aleatória Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "imagens/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Condições de vitória e empate
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 venceu!";
} else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 venceu!";
} else {
    document.querySelector("h1").innerHTML = "Empate!";
}
