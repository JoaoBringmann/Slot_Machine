// 1 - Depositar dinheiro
// 2 - Determinar numero de linhas escolhidas
// 3 - Coletar dinheiro
// 4 - Girar a maquina
// 5 - Checar se o usuario ganhou
// 6 - Dar o dinheiro de o usuario ganhou
// 7 - Jogar de novo

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOLS_VALUE = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

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

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  const reels = [[], [], []];
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};
const reels = spin();
console.log(reels);
let balanca = deposito();
const numeroLinhas = pegarNumeroDeLinhas();
const aposta = pegarAposta(balanca);
