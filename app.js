// Passo 1: MOSTRAR a mensagem de boas-vindas
  console.log("Olá! Bem-vindos à programação!");

  // Passo 2: Mostrar a soma (Processamento Simples)
  console.log(10 + 9); 

  // Passo 3: Mostrar um valor Booleano (revisão da Aula 1)
  console.log(true);

      // Tarefa na Salaria de Variáveis e Tipos de Dados

  const nomeAluno= "João Silva"; // Usando comelCase
  console.log("Nome do Aluno:", nomeAluno);


  let contador = 0;
  console.log("Contador inicial:", contador);
  contador = 1; // Atualizando o valor da variável.
  console.log("Contador atualizado:", contador);

  let idade = 28; // Number
  console.log("Idade:", idade);

  let mensagem = "Vamos aprender JavaScript!"; // String
  console.log("Frase:" , mensagem);
  mensagem = "JavaScript é divertido!"; // Atualizando a mensagem 
  console.log("Frase atualizada:", mensagem);

  let temCarro = true; //Boolean
  console.log("tem carro?", temCarro);

  console.log("Tipo de idade:", typeof idade); // number
  console.log("Tipo de mensagem:", typeof mensagem); // String
  console.log("tipo de temCarro:", typeof temCarro); // Boolean

  const n1 = "10"; // String
  const n2 = 5; // Number
  console.log("Soma (String + Number):", n1 + n2); // concatenação
  console.log("Subtração (String - Number):", n1 - n2); // subtração 
  
  let idadeTexto = "42"; // String
  console.log(typeof idadeTexto); // "string"
  let idadeNumero = Number(idadeTexto);
  console.log(typeof idadeNumero); // "number"


//  Mini Teste

  const nomeUtilizador = prompt("Por favor, insira o seu nome:");
  console.log("Nome do utilizador:", nomeUtilizador);

  let anoNascimento = prompt ("Por favor, insira o seu ano de nascimento:");
  let idadeAtual = 2025 - anoNascimento;
  console.log("Idade atual:", idadeAtual);

  // Trabalho de Casa:

  const taxaCambio = 0.92;
  const moedaOrigem = "Euro";
  const moedaDestino = "Dólar";

  let valorEmEuro = "500"; // Está como String!

  let valorEmDolar = valorEmEuro * taxaCambio; // Conversão implícita para Number

  console.log("Tipo de Valor em Euro:", typeof valorEmEuro); // String
  console.log("Tipo de Valor em Dólar:", typeof valorEmDolar);// Number
  let mensagemFinal = "500 Euro equivalem a 460 Dólar.";
  console.log("Mensagem Final:", valorEmEuro, "euros equivale a", valorEmDolar,"dólar.");