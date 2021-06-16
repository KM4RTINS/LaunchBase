const nome = "Igor";
const altura = 1.85;
const peso = 100;

const imc = peso / (altura * altura);

if (imc >= 30) {
	console.log(`${nome} você está acima do peso`)
} if (imc < 29.9) {
	console.log(`${nome} você não está acima do peso`)
}