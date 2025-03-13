# sorteador-numeros-logica-programacao-js
<h1 align="center"> Sorteador de Números - Lógica de Programação em JavaScript </h1>

<h2 align="center">Primeira aula: Criando a função de Sortear os números. </h2>
<p>Nesta aula, criamos uma função que realiza a coleta de três valores a partir de campos de entrada do usuário, utilizando document.getElementById('id').value. As três variáveis são:

1. ```let quantidade = document.getElementById('quantidade').value;```
2. ```let de = document.getElementById('de').value;```
3. ```let ate = document.getElementById('ate').value;```

Além disso, criamos três alertas para validar se os valores estão sendo corretamente capturados. A sintaxe usada nos alertas é uma template string. As template strings permitem a interpolação de variáveis dentro de strings, utilizando crases (`) ao invés de aspas simples ou duplas.

Aqui está o exemplo de como os alertas são exibidos:
1. ```alert(`Quantidade: ${quantidade}`);```
2. ```alert(`Do número: ${de}`);```
3. ```alert(`Até o número: ${ate}`);```

Explicação sobre Template Strings:

As template strings são delimitadas por crases (`), e dentro delas, podemos interpolar variáveis e expressões utilizando ${}. Isso facilita a inclusão de valores dinâmicos dentro de uma string.
</p>

<h3 align="center"> Conclusão:
  
O código permite ao usuário fornecer entradas através de campos no HTML, validando os valores inseridos e realizando o sorteio de números com base nessas entradas. </h3>

<h2 align="center"> Segunda aula: Criando a função para sortear. </h2>

<p> Na segunda aula, trabalhamos na criação de uma função para sortear números aleatórios. Para isso, implementamos um looping e uma array para realizar o sorteio de mais de um número. Vamos detalhar as etapas que seguimos.

<h3 align="center"> Definindo as Variáveis: </h3>

1. ```let sorteados = [];```
2. ```let numero;</p>```

A variável sorteados é uma array que irá conter todos os números que forem sorteados. A variável numero serve como um "container" temporário para armazenar cada número sorteado, antes de adicioná-lo à array.

<h3 align="center"> O Looping para Sortear Vários Números: </h3>

Em seguida, criamos um looping dentro da função sortear para sortear múltiplos números.

O exemplo do looping ficou assim:

```
for(let i = 0; i < quantidade; i++){
numero = obterNumeroAleatorio(de, ate);
sorteados.push(numero);
```
No código acima, o loop vai repetir o processo de sorteio um número de vezes igual ao valor de quantidade. A cada repetição, um número aleatório é gerado e adicionado à array sorteados.

<h3 align="center"> Função para Obter Números Aleatórios: </h3>

Para gerar os números aleatórios, criamos a função obterNumeroAleatorio, que recebe dois parâmetros: min (valor mínimo) e max (valor máximo). A função retorna um número inteiro aleatório dentro do intervalo especificado. Veja o código dessa função:


```
function obterNumeroAleatorio(min, max){
return Math.floor(Math.random() * (max - min) + min);}
```


<h3 align="center"> Explicação da função: </h3>

Math.random() gera um número decimal aleatório entre 0 e 1.
Multiplicamos esse número pela diferença entre max e min (com a adição de 1 para incluir o valor máximo).
Math.floor() garante que o número sorteado seja inteiro.

<h2 align="center"> Terceira aula: Exibindo os números sorteados. </h2>

<h3 align="center"> Nesta aula, nosso objetivo é exibir os números sorteados na página. Para isso, precisamos: </h3>

<p> 1. Recuperar o elemento HTML onde os números serão exibidos.

2. Criar uma função em JavaScript para atualizar a página com os números sorteados. </p>

<h4 align="center"> Passo 1: Recuperando o elemento HTML </h4>

<p> Dentro do loop for, vamos criar uma variável chamada resultado e associá-la ao elemento com o id resultado no HTML: </p>

``` let resultado = document.getElementById('resultado'); ```

<h4 align="center"> Passo 2: Exibindo os números sorteados. </h4>

<p>Para inserir os números sorteados na página, utilizamos o método innerHTML para atualizar o conteúdo do elemento resultado:</p>

``` resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`; ```
<p>Agora, os números sorteados aparecerão na tela.</p>

<h4 align="center"> Passo 3: Garantindo que os números não se repitam. </h4>

<p> Para evitar números repetidos, vamos verificar se o número sorteado já foi adicionado ao array sorteados antes de inseri-lo. Caso o número já exista, vamos continuar sorteando até encontrar um número único. </p>

<h4 align="center"> Implementação do loop para evitar repetição </h4>

<p> Dentro do loop for, vamos usar um while para garantir que o número sorteado não seja repetido. Se o número sorteado já existir no array, o while vai continuar gerando novos números até que um número único seja encontrado.

Exemplo de código: </p>

```
for (let i = 0; i < quantidade; i++) {
    let numero = obterNumeroAleatorio(de, ate);

    // Enquanto o número sorteado já existir no array 'sorteados', sorteamos um novo número
    while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
    }

    // Adiciona o número ao array 'sorteados'
    sorteados.push(numero);
}
 ```
 <p> Neste código:

sorteados é o array que armazenará os números sorteados.
O método includes() verifica se o número já está presente no array, retornando true ou false. </p>

<h2 align="center"> Quarta aula: Botão de reiniciar. </h2>

<p> Nesta aula, vamos adicionar a funcionalidade de um botão de "reiniciar", que limpará os campos utilizados quando o usuário desejar realizar um novo sorteio.</p>

<h3 align="center"> Passo 1: Habilitar o Botão de Reiniciar no JavaScript. </h3>

<p> No nosso HTML, o botão de reiniciar começa desabilitado. Vamos habilitá-lo através do JavaScript para que o usuário possa utilizá-lo normalmente. Para fazer isso, vamos ativar o botão logo após a função de sorteio, quando o resultado for exibido. </p>

```
let resultado = document.getElementById('resultado');
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
alterarStatusBotao();
```

<p> Aqui, chamamos a função alterarStatusBotao(); para garantir que o botão será ativado após a exibição do resultado. A seguir, vamos criar essa função. </p>

<h3 align="center"> Passo 2: Criar a Função para Alterar o Status do Botão. </h3>

<p> A função alterarStatusBotao() será responsável por alternar o estado do botão entre habilitado e desabilitado. Veja como ela fica: </p>

```
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

<h3 align="center"> Passo 3: Criar a Função para Reiniciar. </h3>

<p> Agora, vamos criar a função reiniciar(), que será acionada quando o usuário clicar no botão de reiniciar. Essa função vai limpar os campos de entrada e o resultado exibido. </p>

```
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}
```

<p>Agora, com essa função, o botão de reiniciar limpará todos os campos e retornará o status do botão para desabilitado.</p>