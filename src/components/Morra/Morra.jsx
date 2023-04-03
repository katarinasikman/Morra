import React, {useEffect, useState} from "react";
import "./Morra.css";
import morraPicture from "./assets/morra-game.jpg";


const Morra = () => {
    const [numberOfFingersShownPlayer1, setNumberOfFingersShownPlayer1] = useState(null);
    const [numberOfFingersGuessedPlayer1, setNumberOfFingersGuessedPlayer1] = useState(null);
    const [numberOfFingersShownPlayer2, setNumberOfFingersShownPlayer2] = useState(null);
    const [numberOfFingersGuessedPlayer2, setNumberOfFingersGuessedPlayer2] = useState(null);
    const [result, setResult] = useState(null);

    const calculateResult = () => {
        if(
            numberOfFingersShownPlayer1 && numberOfFingersGuessedPlayer1 && numberOfFingersShownPlayer2 && numberOfFingersGuessedPlayer2
        ){
            if (
                numberOfFingersShownPlayer1 + numberOfFingersGuessedPlayer2 == numberOfFingersGuessedPlayer1
            ) {
                setResult("You won! Congratualtions!");
            } else if(
                numberOfFingersShownPlayer1 + numberOfFingersGuessedPlayer2 == numberOfFingersGuessedPlayer2
            ) {
                setResult("You lost! Better luck next time!");
            } else if (
                (numberOfFingersShownPlayer1 + numberOfFingersGuessedPlayer2 == numberOfFingersGuessedPlayer1) == numberOfFingersGuessedPlayer2
            ) {
                setResult("It's a tie!");
            } else {
                setResult("It's a draw!");
            }
        }
    };

    const playFinger = (par) => {
        setNumberOfFingersGuessedPlayer1(par);

        if(numberOfFingersShownPlayer1 && par){
            if(numberOfFingersShownPlayer1 == 1){
                alert (
                    `You have shown ${numberOfFingersShownPlayer1} finger and guessed the total of fingers will be: ${par}!`
                );
            }else{
                alert(
                    `You have shown ${numberOfFingersShownPlayer1} fingers and guessed the total of fingers will be: ${par}!`
                );
            }
        }
    };


const rivalShots = () => {
    alert (
        `Your rival shot ${numberOfFingersShownPlayer2} and guessed ${numberOfFingersGuessedPlayer2}!`
    );
    calculateResult();
};

const getRandom = (min, max) => {
    return Math.random() * (max-min) + min;
};

const playPlayer2 = () => {
    setNumberOfFingersShownPlayer2(Math.round(getRandom(1,5)));
    setNumberOfFingersGuessedPlayer2(Math.round(getRandom(2,10)));
};

useEffect(() => {
    if(numberOfFingersShownPlayer2 && numberOfFingersGuessedPlayer2){
        rivalShots();
    }
}, [numberOfFingersShownPlayer2, numberOfFingersGuessedPlayer2]);

useEffect(() => {
    if(numberOfFingersShownPlayer1 && numberOfFingersGuessedPlayer1){
        playPlayer2();
    }
},[numberOfFingersShownPlayer1, numberOfFingersGuessedPlayer1]);

return (
    <div className="wrapper">
      <div>
        <h3>MORRA</h3>
        <hr />
        <p style={{ color: "paleturquoise" }}>
          ✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦
        </p>
        <hr />
        <img src={morraPicture} alt="morra-game" />
        <hr />
        <p style={{ color: "paleturquoise" }}>
          ✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦
        </p>
        <hr />
      </div>
      <div>
        <p>Pick the number of fingers you want to shoot:</p>
        <button
          className="btn"
          onClick={() => setNumberOfFingersShownPlayer1(1)}
        >
          1
        </button>
        <button
          className="btn"
          onClick={() => setNumberOfFingersShownPlayer1(2)}
        >
          2
        </button>
        <button
          className="btn"
          onClick={() => setNumberOfFingersShownPlayer1(3)}
        >
          3
        </button>
        <button
          className="btn"
          onClick={() => setNumberOfFingersShownPlayer1(4)}
        >
          4
        </button>
        <button
          className="btn"
          onClick={() => setNumberOfFingersShownPlayer1(5)}
        >
          5
        </button>
      </div>
      <hr />
      <div>
        <p>Guess the total number of fingers shot:</p>
        <button className="btn" onClick={() => playFinger(2)}>
          2
        </button>
        <button className="btn" onClick={() => playFinger(3)}>
          3
        </button>
        <button className="btn" onClick={() => playFinger(4)}>
          4
        </button>
        <button className="btn" onClick={() => playFinger(5)}>
          5
        </button>
        <button className="btn" onClick={() => playFinger(6)}>
          6
        </button>
        <button className="btn" onClick={() => playFinger(7)}>
          7
        </button>
        <button className="btn" onClick={() => playFinger(8)}>
          8
        </button>
        <button className="btn" onClick={() => playFinger(9)}>
          9
        </button>
        <button className="btn" onClick={() => playFinger(10)}>
          10
        </button>
      </div>
      <hr />
      {numberOfFingersShownPlayer1 && numberOfFingersGuessedPlayer1 ? (
        <p>Waiting for results...</p>
      ) : !numberOfFingersShownPlayer1 ? (
        <p>You didn't shoot any fingers!</p>
      ) : !numberOfFingersGuessedPlayer1 ? (
        <p>You didn't guess the total number of fingers!</p>
      ) : (
        <p>Sorry, better luck next time!</p>
      )}
      <hr />
      <div>
        {result ? (
          <p>{result}</p>
        ) : (
          <p style={{ color: "paleturquoise" }}>
            ✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦
          </p>
        )}
      </div>
      <hr />
      {}
    </div>
  );
};

export default Morra;