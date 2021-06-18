const users = [
  {name: "Cristina", technology: ["HTML", "CSS"]},
  {name: "Natália", technology: ["JavaScript", "Java"]},
  {name: "Yasmim", technology: ["CSS", "Node.js"]}
]

function myFunc() {
  for (i = 0; i < users.length; i++) {
    
    let devTec = users[i].technology

    if (devTec[0] == "CSS" || devTec[1] == "CSS") {
      console.log(`${users[i].name} trabalha com CSS`)
    } else {
      console.log(`${users[i].name} não trabalha com CSS`)
    }

  }
}

myFunc()