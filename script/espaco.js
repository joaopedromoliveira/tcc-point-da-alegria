/* ================= CAROSSEL DE FOTOS ================= */
function scrollCarrossel(direcao) {
        const container = document.getElementById('carrosselSlides');
        const larguraSlide = container.clientWidth;
        const totalSlides = container.children.length;
        
        // Posição atual da rolagem (arredondada para evitar problemas de pixel fracionado)
        const posicaoAtual = Math.round(container.scrollLeft);
        // Largura máxima que o container pode rolar
        const rolagemMaxima = container.scrollWidth - larguraSlide;

        // 1. Se estiver no ÚLTIMO slide e clicar para AVANÇAR (1) -> Volta para o início
        if (direcao === 1 && posicaoAtual >= rolagemMaxima - 5) {
            container.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
        // 2. Se estiver no PRIMEIRO slide e clicar para VOLTAR (-1) -> Vai para o final
        else if (direcao === -1 && posicaoAtual <= 5) {
            container.scrollTo({
                left: rolagemMaxima,
                behavior: 'smooth'
            });
        }
        // 3. Caso contrário, rola normalmente para o lado
        else {
            container.scrollBy({
                left: direcao * larguraSlide,
                behavior: 'smooth'
            });
        }
    }