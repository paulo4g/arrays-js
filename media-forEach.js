// Desafio - Média com forEach

// Calcular a média entre as seguintes notas usando o forEach:
 

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

notas.forEach(function (nota) {
    somaDasNotas += nota
})

const media = somaDasNotas/notas.length

if(media >= 7) {
    console.log(`A média das notas é ${media} e você foi aprovado!`);
} else {
    console.log(`Sinto muito, como sua média foi ${media}, você não foi aprovado`);	
}