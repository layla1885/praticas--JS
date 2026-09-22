let nome = "Layla e bia";
let idade = 17;

console.log ("O nome do usuário é:" + nome);
console.log ("O nome do usuário é:" + idade);

const pNomeusuario = document.getElementById("nomeUsuario"); // pega os elemento pelo ID    
pNomeusuario.textContent =  "O nome do usuário é: " + nome;
const pNomeusuario = document.getElementById("nomeUsuario"); // pega um elemento pelo ID
pNomeusuario.textContent =  "A idade do usuário é: " + idade;

