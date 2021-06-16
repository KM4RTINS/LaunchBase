const classA = [
    {
        name: "Mayk",
        grade: 9.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    },
    {
        name: "Luna",
        grade: 4
    }
]

const classB = [
    {
        name: "Alan",
        grade: 7
    },
    {
        name: "Fabia",
        grade: 5
    },
    {
        name: "Siclano",
        grade: 2
    },
    {
        name: "Luan",
        grade: 6
    }
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}

function sendMessage(average, classroom) {
    if (average > 5) {
        console.log(`${classroom} avarage: ${average}. congrats!`)
    } else {
        console.log(`${classroom} avarage: ${average}. good recovery!`)
    }
}

function studentflunket(students) {
    for (let student of students) {
        markAsFlunket(student)
        sendMessageflunket(student)
    }
}

function markAsFlunket(student) {
    student.flunket = false;
    if (student.grade < 5) {
        student.flunket = true
    }
}

function sendMessageflunket(student) {
    if (student.flunket) {
        console.log(`O student ${student.name} está flunket!`)
    }
}

studentflunket(classA)
studentflunket(classB)

const averageA = calculateAverage(classA)
const averageB = calculateAverage(classB)

sendMessage(averageA, 'class A')
sendMessage(averageB, 'class B')