# 🎲 Projeto: Sorteador de Números com JavaScript

## 📚 Aula 1 - Criando a Função de Sortear os Números

🎯 Objetivo: Capturar valores dos inputs e validar com `alert()`.

```js
let quantidade = document.getElementById('quantidade').value;
let de = document.getElementById('de').value;
let ate = document.getElementById('ate').value;

alert(`Quantidade: ${quantidade}`);
alert(`Do número: ${de}`);
alert(`Até o número: ${ate}`);
```

📌 **Template Strings**: usam crase \` e `${variavel}` pra interpolar valores dentro de strings. Muito útil!

## 🎰 Aula 2 - Sorteando os Números

### 🛠️ Variáveis:
```js
let sorteados = [];
let numero;
```

### 🔁 Loop para sortear:
```js
for(let i = 0; i < quantidade; i++){
    numero = obterNumeroAleatorio(de, ate);
    sorteados.push(numero);
}
```

### 🎲 Função aleatória:
```js
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
```

## 🧾 Aula 3 - Exibindo os Números Sorteados

### 📍 Passo 1: Pegar elemento HTML
```js
let resultado = document.getElementById('resultado');
```

### 👀 Passo 2: Exibir na tela
```js
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
```

### 🚫 Passo 3: Evitar repetições
```js
for (let i = 0; i < quantidade; i++) {
    let numero = obterNumeroAleatorio(de, ate);
    while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
    }
    sorteados.push(numero);
}
```

## 🔄 Aula 4 - Botão de Reiniciar

### ✅ Habilitar botão após sorteio:
```js
alterarStatusBotao();
```

### 🔁 Função alterarStatusBotao:
```js
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
```

### 🧹 Função reiniciar():
```js
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}
```

## 🛡️ Aula 5 - Proteção no Campo "De" e "Até"

### 🚨 Validação:
```js
if (de >= ate) {
    alert(`O valor no campo "De" (${de}) deve ser menor que o campo "Até" (${ate}). Verifique!`);
    return;
}
```

## 🧯 Aula 6 - Proteção no Campo Quantidade

### 📏 Validação da quantidade:
```js
if (quantidade > (ate - de + 1)) {
    alert(`O campo ${quantidade} deve ser menor ou igual ao intervalo entre ${de} e ${ate}. Verifique!`);
    return;
}
```

---
