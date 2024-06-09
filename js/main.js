const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) { //capturando o evento.
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');       //capturando os dados dos inputs.
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value); //tentando converter os inputs para Number.
    const altura = Number(inputAltura.value);

    if (!peso) {  // checando se o peso é verdadeiro.
        setResultado('Peso Inválido', false)
        return;
    }

    
    if (!altura) { // checando se a altura é verdadeira.
        setResultado('Altura inválida', false)
        return;
    }

    const imc = getImc(peso, altura);// foi criado uma função para calcular o imc.
    const nivelImc = getNivelImc(imc);  // função da lista.

    const msg = `Seu IMC é ${imc} (${nivelImc}). `;

    setResultado(msg, true);
});


function getNivelImc(imc) { //crio uma array para obter os valores.
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5]; //baseado no imc, comecei a checar a lógica de trás para frente.
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) { // essa função faz o cálculo do imc.
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function criaP() { // cria um paragrafo.
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) { /// função que seta o resultado, ela recebe uma mensagem e se esse resultado é válido.
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}