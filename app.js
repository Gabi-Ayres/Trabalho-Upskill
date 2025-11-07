// Passo 1: MOSTRAR a mensagem de boas-vindas
  console.log("Olá! Bem-vindos à programação!");

  // Passo 2: Mostrar a soma (Processamento Simples)
  console.log(10 + 9); 

  // Passo 3: Mostrar um valor Booleano (revisão da Aula 1)
  console.log(true);

//
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

  const taxaCambio = 0.92;
  console.log("taxa de câmbio (EURO para USD):", taxaCambio);
  const moedaOrigem = "EURO";
  console.log("Moeda de origem:", moedaOrigem);
  const moedaDestino = "USD";
  console.log("Moeda de destino:", moedaDestino);

  let valorOrigem = "500"; // String
  let valorEmolar = Number(valorOrigem) * taxaCambio;
  console.log("Valor em USD:", valorEmolar);
  let mensagemFinal = " 500 Euro equivalem a [valorEmDolar] Dólar.";
  console.log(mensagemFinal.replace("[valorEmDolar]", valorEmolar.toFixed(2)));

  
  
