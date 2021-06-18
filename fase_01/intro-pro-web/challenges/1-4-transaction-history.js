const user = {
	name: "Maria", 
  transactions: [], 
  balance: 0
}

function createTransaction(transaction) {
	if (transaction.type == "credit")  {
    const sumBalance = transaction.value
    user.transactions.push(sumBalance)

  } else {
    const subBalance = "-" + transaction.value
    user.transactions.push(parseInt(subBalance))

  }

  let balance = 0

  for (i = 0; i < user.transactions.length; i++) {
    balance = balance + (user.transactions[i])
    user.balance = balance
  }

  console.log(user.balance)
}

createTransaction({type: "credit", value: 20})
createTransaction({type: "credit", value: 10.5})
createTransaction({type: "debit", value: 10})
createTransaction({type: "debit", value: 15.5})