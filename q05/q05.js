const formDados = document.getElementById("formDados");

function Calcular(evento) {

    evento.preventDefault();

    let valorhora = Number(document.getElementById("valorhora").value);
    let horastrabalhadas = Number(document.getElementById("horastrabalhadas").value);

    let salario = valorhora * horastrabalhadas;

    const pResultado = document.getElementById("resultado");

    pResultado.textContent = "O salário do professor é: R$ " + salario.toFixed(2);
}

formDados.addEventListener("submit", Calcular);