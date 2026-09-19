console.log("Ruth está acordada 👽");

const prevButton = document.querySelector('.slider-button--prev');
const nextButton = document.querySelector('.slider-button--next');
const ruthImagem = document.querySelector('.ruth-character img');

const ruthImages = [
    "assets/ruth-center-toca.png",
    "assets/ruth-br-tam.png", 
    "assets/ruth-gaucha.png",
    "assets/ruth-gaucha-chimas.png",
    "assets/rutinha-praiana-chopp.png"
    ];

let currentRuth = 0;

function changeRuthCharacter(){ //“Se estou no último → volto pro começo. Senão → avanço.”
    if (currentRuth === ruthImages.length -1 ){
        currentRuth = 0;
    } else {
        currentRuth++;
    }
        
    ruthImagem.src = ruthImages[currentRuth]; 
    }
nextButton.addEventListener('click', changeRuthCharacter); 

function previusRuth(){ //“Se estou no começo → vou pro último. Senão → volto um.”
    if(currentRuth === 0 ){
        currentRuth = ruthImages.length -1;
    } else {
        currentRuth--;
    }

    ruthImagem.src = ruthImages[currentRuth];
    }
prevButton.addEventListener('click', previusRuth);
