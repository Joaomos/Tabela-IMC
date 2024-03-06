/* 
TABELA IMC - pesokg / (aluturam ** 2) 

IMC                               Resultado
Menos do que 18,5                 Abaixo do peso
Entre 18,5 e 24,9                 Peso normal
Entre 25 e 29,9                   Sobrepeso
Entre 30 e 34,9                   Obesidade grau 1
Entre 35 e 39,9                   Obesidade grau 2
Mais do que 40                    Obesidade grau 3

CALCULE SEU IMC
Peso:
--------
Altura:
-----
CALCULAR <button>

Seu IMC é ... (Peso normal)

-----------------------------------------------------------------

Se o usuário não digitar nada: peso inválido
Se o usuário digitar só o peso: altura inválida

if (peso !== number) {
    innerHTML = peso inválido
} else if (altura !== number) {
    innerHTML = altura inválida
} else : ...
*/
function meuEscopo(){

const form = document.querySelector('.form');
const tituloResultado = document.querySelector('.tituloResultado')
const resultado = document.querySelector('.resultado');
let dados = [];

function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = form.querySelector('#input-peso');
    const altura = form.querySelector('#input-altura');

    dados.push({
        peso: peso.value,
        altura: altura.value
    });
    console.log(dados);

    if ((peso.value <= 1 || peso.value >= 400) || (altura.value <= 0.5 || altura.value >= 2.5)) {
        tituloResultado.innerHTML = `<h1>Resultado:</ h1>`;
        resultado.innerHTML = `<p>Os dados informados são inválidos.</p>`;
    } else if (isNaN(peso.value) || isNaN(altura.value)) {
        tituloResultado.innerHTML = `<h1>Resultado:</ h1>`;
        resultado.innerHTML = `<p>Os dados informados são inválidos.</p>`;
    } else {
        let imc = peso.value / (altura.value ** 2);

        if (imc < 18.5) {
            tituloResultado.innerHTML = `<h1>Resultado:</ h1>`;
            resultado.innerHTML = `<p>Abaixo do peso.</p>`;
        } else if (imc < 24.9) {
            tituloResultado.innerHTML = `<h1>Resultado:</ h1>`;
            resultado.innerHTML = `<p>Peso normal</p>`;
        } else if (imc < 29.9) {
            tituloResultado.innerHTML = `<h1>Resultado:</ h1>`;
            resultado.innerHTML = `<p>Sobrepeso</p>`;
        } else if (imc < 34.9) {
            tituloResultado.innerHTML = `<h1>Resultado:</ h1>`;
            resultado.innerHTML = `<p>Obesidade grau 1</p>`;
        } else if (imc < 39.9) {
            tituloResultado.innerHTML = `<h1>Resultado:</ h1>`;
            resultado.innerHTML = `<p>Obesidade grau 2</p>`;
        } else {
            tituloResultado.innerHTML = `<h1>Resultado:</ h1>`;
            resultado.innerHTML = `<p>Obesidade grau 3</p>`;
        }

    }

}

form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();