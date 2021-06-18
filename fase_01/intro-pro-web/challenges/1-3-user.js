const user = [
  {name: "Cristina", technology: ["HTML", "CSS"]},
  {name: "Natália", technology: ["JavaScript", "CSS"]},
  {name: "Yasmim", technology: ["HTML", "Node.js"]}
]

for (let i = 0; i < user.length; i++) {
  console.log(`${user[i].name} trabalha com ${user[i].technology}.`)
}