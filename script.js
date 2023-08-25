let fristNumber = Number(prompt(`Digite o primeiro número: `));
let secondNumber = Number(prompt(`Digite o segundo número: `));



const sum = fristNumber + secondNumber;
const subtraction = fristNumber - secondNumber;
const multiplication = fristNumber * secondNumber;
const division = fristNumber / secondNumber;
const rest = fristNumber % secondNumber;

alert("A soma é: " + sum.toFixed(2))
alert("A subtração é: " + subtraction.toFixed(2))
alert("A multiplicação é: " + multiplication.toFixed(2))
alert("A divisão é: " + division.toFixed(2))
alert("A resto é: " + rest.toFixed(2))

if(sum % 2 === 0) {
  alert('A soma dos números é par.')
}else {
  alert('A soma dos números é ímpar.')
}

if (fristNumber === secondNumber) {
  alert("Os números são iguais.")
}else {
  alert("Os números são diferentes.")
}