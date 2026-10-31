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
