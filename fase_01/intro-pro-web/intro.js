//Marcar aluno como reprovado se a nota for menor que 5 e também enviar uma mensagem.

const alunosdaturmaA = [
    {
        nome: "Mayk",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2
    },
    {
        nome: "Luna",
        nota: 4
    }
]

const alunosdaturmaB = [
    {
        nome: "Alan",
        nota: 7
    },
    {
        nome: "Fabia",
        nota: 5
    },
    {
        nome: "Siclano",
        nota: 2
    },
    {
        nome: "Luan",
        nota: 6
    }
]

function calculamedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

function enviamensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da ${turma} foi de ${media}. Boa recuperação!`)
    }
}

function alunoreprovado(alunos) {
    for (let aluno of alunos) {
        marcarcomoreprovado(aluno)
        enviamensagemreprovado(aluno)
    }
}

function marcarcomoreprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
}

function enviamensagemreprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

alunoreprovado(alunosdaturmaA)
alunoreprovado(alunosdaturmaB)

const mediaA = calculamedia(alunosdaturmaA)
const mediaB = calculamedia(alunosdaturmaB)

enviamensagem(mediaA, 'turma A')
enviamensagem(mediaB, 'turma B')