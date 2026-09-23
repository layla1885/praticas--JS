const formDados = document.getElementById("formDados");

function Calcular(evento) {

    evento.preventDefault();

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let notaFinal = (n1 * 2 + n2 * 3) / 5;

    const pResultado = document.getElementById("resultado");

    if (notaFinal >= 6) {
        pResultado.textContent = "Nota final: " + notaFinal.toFixed(2) + " - Aprovado";
    } else {
        pResultado.textContent = "Nota final: " + notaFinal.toFixed(2) + " - Reprovado";
    }
}

formDados.addEventListener("submit", Calcular);