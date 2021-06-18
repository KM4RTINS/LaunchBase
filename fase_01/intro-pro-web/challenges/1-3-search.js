const usuarios = [
  {nome: "Cristina", tecnologia: ["HTML", "CSS"]},
  {nome: "Natália", tecnologia: ["JavaScript", "Java"]},
  {nome: "Yasmim", tecnologia: ["CSS", "Node.js"]}
]

function myFunc() {
  for (i = 0; i < usuarios.length; i++) {
    
    let devTec = usuarios[i].tecnologia

    if (devTec[0] == "CSS" || devTec[1] == "CSS") {
      console.log(`${usuarios[i].nome} trabalha com CSS`)
    } else {
      console.log(`${usuarios[i].nome} não trabalha com CSS`)
    }

  }
}

myFunc()