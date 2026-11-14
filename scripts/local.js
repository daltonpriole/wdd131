

// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", () => {

    // 1. Obtém e exibe o ano atual automaticamente no rodapé
    const anoElemento = document.getElementById("anoatual");
    if (anoElemento) {
        const anoAtual = new Date().getFullYear();
        anoElemento.textContent = anoAtual;
    }

    // 2. Obtém e exibe a data e hora da última modificação do arquivo
    const modificacaoElemento = document.getElementById("ultimaModificacao");
    if (modificacaoElemento) {
        // document.lastModified retorna uma string contendo a data/hora de modificação do arquivo no servidor
        modificacaoElemento.textContent = document.lastModified;
    }
});

// 2. Entradas estáticas (preparadas para receber dados dinâmicos no futuro)
const temperatura = parseFloat(document.getElementById("temp").textContent);
const velocidadeVento = parseFloat(document.getElementById("wind").textContent);

// 3. Função com uma única linha de código para calcular a sensação térmica (Métrica: °C e km/h)
function calcularSensacaoTermica(temp, vento) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16)).toFixed(1);
}

// 4. Verificação das condições antes de chamar a função
const elementoSensacao = document.getElementById("windchill");

if (temperatura <= 10 && velocidadeVento > 4.8) {
    elementoSensacao.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento)} °C`;
} else {
    elementoSensacao.textContent = "N/A";
}