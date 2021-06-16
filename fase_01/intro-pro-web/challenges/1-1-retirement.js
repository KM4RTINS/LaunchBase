const nome = "Igor";
const sexo = "M";
const idade = 22;
const contribuicao = 4;

const homem = "H";
const mulher = "M";
const regra = idade + contribuicao;

if (sexo == homem) {
	console.log(`Homem: ${nome}`)
}

if (sexo == homem) {
	if (contribuicao >= 35) {
		if (regra == 95) {
			console.log(`${nome}, você pode se aposentar.`)
		} else {
			console.log(`${nome}, você não pode se aposentar.`)
		}
	} else {
		console.log("Você não tem tempo de contribuição suficiente para se aposentar.")
	}
} 

if (sexo == mulher) {
	console.log(`Mulher: ${nome}`)
}

if (sexo == mulher) {
	if (contribuicao >= 30) {
		if (regra == 85) {
			console.log(`${nome}, você pode se aposentar.`)
		} else {
			console.log(`${nome}, você não pode se aposentar.`)
		}
	} else {
		console.log("Você não tem tempo de contribuição suficiente para se aposentar.")
	}
}