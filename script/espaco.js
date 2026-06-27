let indiceAtualCarrossel = 0;

function scrollCarrossel(direcao) {
    const containerParaMover = document.getElementById('carrosselSlides');
    const containerVisor = document.querySelector('.carrossel-container');
    const slides = containerParaMover.children;
    const totalSlides = slides.length;
    const larguraSlide = containerVisor.clientWidth;

    let proximoIndice = indiceAtualCarrossel + direcao;

    if (proximoIndice >= totalSlides) {
        proximoIndice = 0;
    } else if (proximoIndice < 0) {
        proximoIndice = totalSlides - 1;
    }

    const deslocamento = -1 * (larguraSlide * proximoIndice);
    containerParaMover.style.transform = `translateX(${deslocamento}px)`;

    indiceAtualCarrossel = proximoIndice;

    // CHAMA A FUNÇÃO PARA ATUALIZAR AS BOLINHAS
    atualizarBolinhas();
}

// NOVA FUNÇÃO: Gerencia a classe 'ativa' nas bolinhas
function atualizarBolinhas() {
    const containerIndicadores = document.getElementById('carrosselIndicadores');
    const bolinhas = containerIndicadores.children;

    // Passa por todas as bolinhas, remove 'ativa' e coloca só na que corresponde ao índice atual
    for (let i = 0; i < bolinhas.length; i++) {
        if (i === indiceAtualCarrossel) {
            bolinhas[i].classList.add('ativa');
        } else {
            bolinhas[i].classList.remove('ativa');
        }
    }
}

function irParaSlide(indice) {
    const containerParaMover = document.getElementById('carrosselSlides');
    const containerVisor = document.querySelector('.carrossel-container');
    const larguraSlide = containerVisor.clientWidth;

    indiceAtualCarrossel = indice;

    const deslocamento = -1 * (larguraSlide * indiceAtualCarrossel);
    containerParaMover.style.transform = `translateX(${deslocamento}px)`;

    atualizarBolinhas();
}

const bolinhas = document.querySelectorAll('#carrosselIndicadores .dot');

bolinhas.forEach((bolinha, indice) => {
    bolinha.addEventListener('click', () => {
        irParaSlide(indice);
    });
});