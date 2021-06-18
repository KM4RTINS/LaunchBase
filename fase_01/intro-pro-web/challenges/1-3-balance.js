const users = [
  {
    name: 'Salvio',
    recipes: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: 'Marcio',
    recipes: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: 'Lucia',
    recipes: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
]

function calculateBalance(recipes, expenses) {
  const addRecipes =  addNumbers(recipes)
  const addExpenses =   addNumbers(expenses)

  return  addRecipes - addExpenses
}

function addNumbers(numbers) {
  let sum = 0

  for (let number of numbers) {
    sum = sum + number
  }

  return sum
}

for (let user of users) {
  const balance = calculateBalance(user.recipes, user.expenses)

  if (balance > 0) {
    console.log(`${user.name} possui saldo POSITIVO de ${balance.toFixed(2)}`)
  } else {
    console.log(`${user.name} possui saldo NEGATIVO de ${balance.toFixed(2)}`)
  }

}