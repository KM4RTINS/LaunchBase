const programmer = {
	name: "Igor",
	age: 22,
	technology: [
		{ name: 'C++', specialty: 'Desktop' },
		{ name: 'Python', specialty: 'Data Science' },
		{ name: 'JavaScript', specialty: 'Web/Mobile' }
	]
}

console.log(`O usuário ${programmer.name} tem ${programmer.age} anos e usa a tecnologia ${programmer.technology[0].name} com especialidade em ${programmer.technology[0].specialty}.`)