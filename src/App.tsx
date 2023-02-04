import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const jurosPorBoleto = 0.0299;
const jurosPorParcela = 0.0349;
const valorFin = 1000;

interface Results {
  parcela: number;
  valorParceladoComJuros: number;
  valorTotalComJuros: number;
}
function App() {
  const [results, setResults] = useState<Results[]>([]);

  function createInstallments() {
    const valor = valorFin + valorFin * jurosPorBoleto;

    let valorParceladoComJuros = 0;
    let valorTotalComJuros = 0;
    let list: Results[] = [];

    // A fórmula para o cálculo dos juros
    // https://www3.bcb.gov.br/CALCIDADAO/publico/exibirMetodologiaFinanciamentoPrestacoesFixas.do?method=exibirMetodologiaFinanciamentoPrestacoesFixas
    for (let parcela = 1; parcela <= 12; parcela++) {
      if (parcela == 1) {
        valorParceladoComJuros = valor;
        valorTotalComJuros = valorParceladoComJuros;
      } else {
        valorParceladoComJuros =
          (valor * jurosPorParcela) /
          (1 - Math.pow(1 + jurosPorParcela, -parcela));
        valorTotalComJuros = valorParceladoComJuros * parcela;
      }

      list.push({
        parcela,
        valorParceladoComJuros: parseFloat(valorParceladoComJuros.toFixed(2)),
        valorTotalComJuros: parseFloat(valorTotalComJuros.toFixed(2)),
      });
    }

    setResults(list);
  }

  return (
    <div className="App">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <img src="/vite.svg" className="logo" alt="Vite logo" />

      <hr />

      <button onClick={createInstallments}>Calcular</button>

      <ul>
        {results.map((result) => (
          <li>
            {result.parcela} x R${result.valorParceladoComJuros} Total de R$
            {result.valorTotalComJuros}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
