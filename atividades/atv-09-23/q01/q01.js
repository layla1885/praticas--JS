const formDados = document.getElementById("formDados");

function Converter(evento) {
  evento.preventDefault();

  let valorreais = Number (document.getElementById("valorreais").value);
  let valordolar = valorreais / 5.14;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "O resultado da conversão é: US$ " + valordolar.toFixed(2);
  
}

formDados.addEventListener("submit", Converter);