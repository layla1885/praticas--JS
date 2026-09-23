const formDados = document.getElementById("formDados");

function Calcular(evento) {

    evento.preventDefault();

    let raio = Number(document.getElementById("raio").value);

    let circunferencia = 2 * Math.PI * raio;

    const pResultado = document.getElementById("resultado");

    pResultado.textContent = "A circunferência é: " + circunferencia.toFixed(2);
}

formDados.addEventListener("submit", Calcular);