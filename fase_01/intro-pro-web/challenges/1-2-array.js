const student = {
	name: "Igor",
	company: {
		name: "Rocketseat",
		color: "roxo",
		focus: "programação",
		address: {
			road: "Rua Guilherme Gembala",
			number: "206",
		}
	}
}

console.log(`A empresa ${student.company.name} está localizada em ${student.company.address.road}, ${student.company.address.number}`)