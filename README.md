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
    return Math.floor(Math.random() * (max - min) + min);
}
```

<h3 align="center"> Explicação da função: </h3>

Math.random() gera um número decimal aleatório entre 0 e 1.
Multiplicamos esse número pela diferença entre max e min (com a adição de 1 para incluir o valor máximo).
Math.floor() garante que o número sorteado seja inteiro.
