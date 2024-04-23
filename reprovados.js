//Desafio - Filtrando por nota

// Depois de calcular a média, precisamos mostrar quem está reprovado.

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const medias = [7, 4.5, 8, 7,5]

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})

console.log(`O aluno reprovado foi: ${reprovados}`);