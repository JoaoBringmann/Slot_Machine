// 1 - Depositar dinheiro
// 2 - Determinar numero de linhas escolhidas
// 3 - Coletar dinheiro
// 4 - Girar a maquina
// 5 - Checar se o usuario ganhou
// 6 - Dar o dinheiro de o usuario ganhou
// 7 - Jogar de novo

const prompt = require("prompt-sync")();

const deposito = () => {
  while (true) {
    const depositoValor = prompt("Entre um valor para depositar: ");
    const numeroDepositoValor = parseFloat(depositoValor);
    if (isNaN(numeroDepositoValor) || numeroDepositoValor <= 0) {
      console.log("Valor invalido, tente novamente");
    } else {
      return numeroDepositoValor;
    }
  }
};

const pegarNumeroDeLinhas = () => {
  while (true) {
    const linhas = prompt("Entre o numero de linhas para apostar (1-3): ");
    const numeroLinhas = parseFloat(linhas);
    if (isNaN(numeroLinhas) || numeroLinhas <= 0 || numeroLinhas > 3) {
      console.log("Valor invalido, tente novamente");
    } else {
      return numeroLinhas;
    }
  }
};

const pegarAposta = (balanca, linhas) => {
  while (true) {
    const aposta = prompt("Entre a quantidade para apostar a cada linha: ");
    const numeroAposta = parseFloat(aposta);
    if (
      isNaN(numeroAposta) ||
      numeroAposta <= 0 ||
      numeroAposta > balanca / linhas
    ) {
      console.log("Valor invalido, tente novamente");
    } else {
      return numeroAposta;
    }
  }
};

let balanca = deposito();
const numeroLinhas = pegarNumeroDeLinhas();
const aposta = pegarAposta(balanca);
