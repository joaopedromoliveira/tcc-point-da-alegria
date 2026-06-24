/* ================= CAROSSEL DE FOTOS ================= */
function scrollCarrossel(direcao) {
            const container = document.getElementById('carrosselSlides');
            // Mede a largura de uma imagem para saber quanto arrastar
            const larguraSlide = container.clientWidth; 
            
            container.scrollBy({
                left: direcao * larguraSlide,
                behavior: 'smooth'
            });
        }