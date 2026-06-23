/* ================= CALENDARIO PARA AGENDAMENTO ================= */

function enviarWhatsapp() {
    
        const data = document.getElementById('dataEvento').value;
    
        if (!data) {
            alert("Selecione uma data.");
            return;
        }
    
        const partes = data.split('-');
        const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;
    
        const telefone = "5511945737905"; // Número do buffet
    
        const mensagem =
            `Olá! Gostaria de verificar a disponibilidade do buffet para a data ${dataFormatada}. Poderiam me informar os valores e opções de pacotes?`;
    
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
        window.open(url, '_blank');
    }

    