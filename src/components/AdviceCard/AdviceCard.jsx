import "./index.css";
import { useState, useEffect } from "react";

const AdviceCard = () => {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`, { cache: "no-store" })
      .then((res) => res.json())
      .then((res) => setAdvice(res?.slip));
  }, [count]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="AdviceCard">
      <h6 className="AdviceCard__Id">Advice #{advice?.id}</h6>
      <p className="AdviceCard__Text">{advice?.advice}</p>
      <button onClick={handleClick}>⁘</button>
    </div>
  );
};

const Loop = () => {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`, { cache: "no-store" })
      .then((res) => res.json())
      .then((res) => setAdvice(res?.slip));
  });

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="LoopCard">
      <h6 className="LoopCard__Id">Loop Advice</h6>
      <p className="LoopCard__Text">
        {advice?.advice}
        {handleClick}
      </p>
    </div>
  );
};

export { AdviceCard, Loop };
