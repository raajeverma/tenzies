import React, { useState } from "react";
import "./App.css";
import Die from "./Components/Die";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import Confetti from "react-confetti";
import Stats from "./Components/Stats";
import ProfileBox from "./Components/ProfileBox";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rolls, setRolls] = useState(0);
  const [myClock, setmyClock] = useState(0);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore") || 0)
  );
  const [gameStart, setGameStart] = useState(false);
  useEffect(() => {
    let interval = null;
    if (gameStart) {
      interval = setInterval(() => {
        setmyClock((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [gameStart]);

  useEffect(
    function () {
      const isHeld = dice.every((die) => die.isHeld === true);
      const firstValue = dice[0].value;
      const allSameValue = dice.every((die) => die.value === firstValue);
      if (isHeld && allSameValue) {
        setGameStart(false);
        setTenzies(true);
        setBestScore((prevBestScore) => {
          if (myClock < prevBestScore) {
            JSON.stringify(localStorage.setItem("bestScore", myClock));
            return myClock;
          } else {
            return prevBestScore;
          }
        });
      }
    },
    [dice, myClock]
  );

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 1; i <= 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setGameStart(true);
      setRolls((prevCount) => prevCount + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setmyClock(0);
      setRolls(0);
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      dieImg={item.dieImg}
      isHeld={item.isHeld}
      id={item.id}
      holdDice={() => holdDice(item.id)}
    />
  ));

  return (
    <div>
      <ProfileBox />
      <main>
        <h1 className="title">
          {tenzies ? "You Won" : "Tenzies"}
          <img
            className="dice-logo"
            src="https://cdn-icons-png.flaticon.com/512/7838/7838674.png"
            alt="dice"
          />
        </h1>
        {rolls > 0 ? (
          <Stats rolls={rolls} time={myClock} bestScore={bestScore} />
        ) : (
          <p className="instructions">
            <span>How To Play</span>
            Click or tap a die to lock or unlock it. Only unlocked dice will be
            rolled when you click the Roll button. The game is won when all ten
            dice are matched and locked. Use the refresh button to quickly try
            for a better first roll.
          </p>
        )}
        {rolls > 0 && <div className="container">{diceElements}</div>}

        <button className="roll-btn" onClick={rollDice}>
          {tenzies ? "New Game" : rolls === 0 ? "Let's Go!" : "Roll"}
        </button>
        {tenzies && <Confetti />}
      </main>
    </div>
  );
}

export default App;
