const noun = "Igor";
const height = 1.85;
const weight = 100;

const imc = weight / (height * height);

if (imc >= 30) {
	console.log(`${noun} você está acima do peso`)
} if (imc < 29.9) {
	console.log(`${noun} você não está acima do peso`)
}