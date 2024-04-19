//Desafio

//Calcular a média entre as seguintes notas usando o for:
// 10, 6.5, 8, 7.5

const notas = [10, 6.5, 8, 1];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]
}
const media = somaDasNotas/notas.length

if(media >= 7) {
    console.log(`A média das notas é ${media} e você foi aprovado!`);
} else {
    console.log(`Sinto muito, como sua média foi ${media}, você não foi aprovado`);	
}