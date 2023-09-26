import React, { useState, useEffect } from "react";
import "./478.css";

const Page478 = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState("Ready");
  const [language, setLanguage] = useState(navigator.language || navigator.userLanguage);

  const isPortuguese = language.startsWith("pt");

  useEffect(() => {
    let timer;

    if (isActive) {
      if (phase === "Inhale" && count < 4) {
        timer = setTimeout(() => setCount(count + 0.01), 10);
      } else if (phase === "Hold" && count < 7) {
        timer = setTimeout(() => setCount(count + 0.01), 10);
      } else if (phase === "Exhale" && count < 8) {
        timer = setTimeout(() => setCount(count + 0.01), 10);
      } else {
        setCount(0);
        setPhase((prevPhase) => {
          if (prevPhase === "Inhale") return "Hold";
          if (prevPhase === "Hold") return "Exhale";
          return "Inhale";
        });
      }
    }

    return () => clearTimeout(timer);
  }, [count, isActive, phase]);

  const start = () => {
    setIsActive(true);
    setCount(0);
    setPhase("Inhale");
  };

  const stop = () => {
    setIsActive(false);
    setCount(0);
    setPhase("Ready");
  };

  return (
    <div>
      <div className="flags">
        <img src="./assets/img/en.png" alt="English" onClick={() => setLanguage("en")} />
        <img src="./assets/img/pt-br.png"    alt="Português" onClick={() => setLanguage("pt")} />
      </div>
      <div className="clock">
        {(count).toFixed(0)} {/* Exibe a contagem atual com 3 casas decimais */}
      </div>
      <div className="phase-container">
        <div className={phase === "Inhale" ? "active" : ""}>{isPortuguese ? "Inspire" : "Inhale"}</div>
        <div className={phase === "Hold" ? "active" : ""}>{isPortuguese ? "Segure" : "Hold"}</div>
        <div className={phase === "Exhale" ? "active" : ""}>{isPortuguese ? "Expire" : "Exhale"}</div>
      </div>
      <div className="progress-container">
        <progress value={count} max={phase === "Inhale" ? 4 : phase === "Hold" ? 7 : 8}></progress>
      </div>
      <div className="btn-container">
        <button onClick={start} className="btn-start">{isPortuguese ? "Iniciar" : "Play"}</button>
        <button onClick={stop} className="btn-stop">{isPortuguese ? "Parar" : "Stop"}</button>
      </div>
    </div>
  );
};

export default Page478;
