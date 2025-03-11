# sorteador-numeros-logica-programacao-js
<h1 align="center"> Sorteador de Números - Lógica de Programação em JavaScript </h1>

<h2 align="center">Primeira aula: Criando a função de Sortear os números. </h2>
<p>Neste projeto, criamos uma função que realiza a coleta de três valores a partir de campos de entrada do usuário, utilizando document.getElementById('id').value. As três variáveis são:

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
