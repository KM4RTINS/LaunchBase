const usuario = [
  {nome: "Cristina", tecnologia: ["HTML", "CSS"]},
  {nome: "Natália", tecnologia: ["JavaScript", "CSS"]},
  {nome: "Yasmim", tecnologia: ["HTML", "Node.js"]}
]

for (let i = 0; i < usuario.length; i++) {
  console.log(`${usuario[i].nome} trabalha com ${usuario[i].tecnologia}.`)
}