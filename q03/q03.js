const formDados = document.getElementById("formDados");

function Converter(evento) {

    evento.preventDefault();

    let valorpolegadas = Number(document.getElementById("valorpolegadas").value);

    let valorcentimetros = valorpolegadas * 2.54;

    const pResultado = document.getElementById("resultado");

    pResultado.textContent = "O resultado da conversão é: " + valorcentimetros.toFixed(2) + " cm";
}

formDados.addEventListener("submit", Converter);