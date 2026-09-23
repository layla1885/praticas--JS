const formDados = document.getElementById("formDados");

function Calcular(evento) {
  evento.preventDefault();

  let valor = Number(document.getElementById("valor").value);
  let quadrado = valor * valor;

  const pResultado = document.getElementById("resultado");
  pResultado.textContent = "O quadrado do valor é: " + quadrado;
  
}

formDados.addEventListener("submit", Calcular);
