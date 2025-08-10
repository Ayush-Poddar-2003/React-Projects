import styled from "styled-components";
import { NumberSelector } from "./NumberSelector";
import { TotalScore } from "./TotalScore";
import { RollDice } from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import { Rules } from "./Rules";

export function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any Number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <OutlineButton onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </OutlineButton>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
}

const MainContainer = styled.main`
  /* border: 2px solid green; */
  padding-top: 70px;
  .topSection {
    display: flex;
    align-items: end;
    justify-content: space-around;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
  }
`;
