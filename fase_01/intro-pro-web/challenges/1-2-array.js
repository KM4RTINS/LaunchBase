const aluno = {
	nome: "Igor",
	empresa: {
		nome: "Rocketseat",
		cor: "roxo",
		foco: "programação",
		endereço: {
			rua: "Rua Guilherme Gembala",
			numero: "206",
		}
	}
}

console.log(`A empresa ${aluno.empresa.nome} está localizada em ${aluno.empresa.endereço.rua}, ${aluno.empresa.endereço.numero}`)