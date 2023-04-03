import React, {useState} from "react";
import {Reach} from "@reach-sh/stdlib";

const Player = () => {
    const {standardUnit} = Reach;

    const random = () => {
        return Reach.hasRandom.random();
    };

    const fingerToInt = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5};
    const guessToInt = {
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        SIX: 6,
        SEVEN: 7,
        EIGHT: 8,
        NINE: 9,
        TEN: 10,
    };
    const intToOutcome = ["Marija wins!", "Draw!", "Katarina wins!"];
    const defaults = {defaultFundAmt: "10", defaultWager: "5", standardUnit};
    const [finger, setFinger] = useState(null);

    const getFinger = async () => {
        const finger = await new Promise((resolveFingerP) => {
            this.useState({view: "GetFinger", playable: true, resolveFingerP});
            setFinger(resolveFingerP);
        });
        this.setState({view: "WaitingForResults", finger});
        return fingerToInt[finger];
    };

    const getGuess = async () => {
        const guees = await new Promise((resolveGuessP) => {
            this.setState({view: "GetGuess", playable: true, resolveGuessP});
        });
        this.setState({view: "WaitingForResults", guess});
        return guessToInt[guess];
    };

    const seeWinning = (i) => {
        this.setState({view: "SeeWinning", winning: i});
    };

    const seeOutcome = (i) => {
        this.setState({view: "Done", outcome: intToOutcome[i]});
    };

    const informTimeout = () => {
        this.setState({view: "Timeout"});
    };

    const playFinger = (finger) => {
        finger(finger);
    };

    const makeGuess = (guess) => {
        this.state.resolveGuessP(guess);
    };

    return(
        <div className="wrapper">
            <p>Pick the number of fingers you want to shoot</p>
            <br />
            <br />
            <button onClick={() => playFinger("ONE")}>1</button>
            <button onClick={() => playFinger("TWO")}>2</button>
            <button onClick={() => playFinger("THREE")}>3</button>
            <button onClick={() => playFinger("FOUR")}>4</button>
            <button onClick={() => playFinger("FIVE")}>5</button>
        </div>
    );
};

export default Player;
