function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Verificação do limite de quantidade
    if (quantidade > 10) {
        alert("Você pode escolher no máximo 10 números.");
        return;
    }

    // Verificação de de e ate entre 1 e 100
    if (de < 1 || de > 100 || ate < 1 || ate > 100) {
        alert(`Os valores de ${de} e ${ate} devem estar entre 1 e 100.`);
        return;
    }

    // Verificação de que 'de' deve ser menor que 'ate'
    if (de >= ate) {
        alert(`O campo ${de} deve ser inferior ao campo ${ate}. Verifique!`);
        return;
    }

    // Verificação de quantidade não ultrapassar os números possíveis entre de e até
    if (quantidade > (ate - de + 1)) {
        alert(`O campo ${quantidade} deve ser menor ou igual ao campo ${de} até o campo ${ate}. Verifique!`);
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);  // Corrigido para incluir o valor de 'ate'
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}
