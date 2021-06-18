const name = "Igor";
const sex = "M";
const age = 22;
const contribution = 4;

const man = "H";
const woman = "M";
const rule = age + contribution;

if (sex == man) {
	console.log(`Homem: ${name}`)
}

if (sex == man) {
	if (contribution >= 35) {
		if (rule == 95) {
			console.log(`${name}, você pode se aposentar.`)
		} else {
			console.log(`${name}, você não pode se aposentar.`)
		}
	} else {
		console.log("Você não tem tempo de contribuição suficiente para se aposentar.")
	}
} 

if (sex == woman) {
	console.log(`Mulher: ${name}`)
}

if (sex == woman) {
	if (contribution >= 30) {
		if (rule == 85) {
			console.log(`${name}, você pode se aposentar.`)
		} else {
			console.log(`${name}, você não pode se aposentar.`)
		}
	} else {
		console.log("Você não tem tempo de contribuição suficiente para se aposentar.")
	}
}