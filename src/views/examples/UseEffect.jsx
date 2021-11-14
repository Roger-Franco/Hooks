import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  // Ex #01
  const [number, setNumber] = useState(0);
  const [fatorial, setFatorial] = useState(0);
  // Ex #02
  const [number2, setNumber2] = useState(0);

  // Ex Meu
  const [num, setNum] = useState(0);

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      if (fatorial > 1000000) document.title = "Eita!!";
    },
    [fatorial]
  );

  // Ex #02
  const [status, setStatus] = useState("Ímpar");

  useEffect(function() {
    setStatus(number2 % 2 === 0 ? "Par" : "Ímpar")
  }, [number2])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {fatorial === -1 ? "Valor não existe" : fatorial}
          </span>
        </div>
        <input
          className="input"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
        <input
          type="number"
          className="input"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #Minha solução" />
      <div className="center">
        <div>
          <span className="text">Minha solução Par ou impar: </span>
          <span className="text red">{num % 2 === 0 ? "Par" : "Impar"}</span>
        </div>
        <input
          type="number"
          className="input"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
