const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (+, -, * ou /):");

let resultado;

if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
  alert("Por favor, digite números válidos.");
} else {
  switch (operacao) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      if (numero2 === 0) {
        alert("Não é possível dividir por zero.");
      } else {
        resultado = numero1 / numero2;
      }
      break;
    default:
      alert("Operação inválida. Use +, -, * ou /.");
  }

  if (resultado !== undefined) {
    alert(`Resultado: ${numero1} ${operacao} ${numero2} = ${resultado}`);
    console.log(`${numero1} ${operacao} ${numero2} = ${resultado}`);
  }
}
