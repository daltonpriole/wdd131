let curso = {
    codigo: "WDD131",
    nome: "Fundamentos da Web Dinâmica",
    credits: 2,
    secoes: [
        { secao: "002", matriculado: 90, instrutor: "Jose" },
        { secao: "003", matriculado: 85, instrutor: "Pedro"},
    ]
};

function definirInformacoesCurso(curso) {
    document.querySelector("#nomeCurso").innerHTML = `${curso.codigo} - ${curso.nome}`;
}

function exibirSecoes(curso) {
    const tbody = document.querySelector("#secoes tbody");
    let linhas = "";
    for (const secao of curso.secoes) {
        linhas += `<tr>
      <td>${secao.secao}</td>
      <td>${secao.matriculado}</td>
      <td>${secao.instrutor}</td>
    </tr>`;
    }
    tbody.innerHTML = linhas;
}

definirInformacoesCurso(curso);
exibirSecoes(curso);
