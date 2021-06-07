import React from "react";
import { useState } from "react";

// styling
import{SubParent , Butt} from "./styles"

import "./App.css";


function App() {
  const [userNumber, setUserNumber] = useState();

  const [random, setRandom] = useState(Math.floor(Math.random() * 100 + 1));

  const [attempts, setAttempts] = useState(0);

  const [clickedNum, setclickedNum] = useState();

  const [gameOver, setGameOver] = useState(false);

  const handleChange = (event) => {
    if (event.target.value.length < 3 || event.target.value == 100) {
      setUserNumber(event.target.value);
    }

    console.log(event.target.value);
  };

  const compare = () => {
    if (userNumber != "") {
      setclickedNum(userNumber);

      console.log("R", random);

      if (random == userNumber) {
        //console.log("Winer");
      }

      setAttempts(attempts + 1);

      if (attempts == 5) {

        setGameOver(true);
        reset();
      } else {
        setGameOver(false);
      }

      setUserNumber("");
    }
  };

  const reset = () => {
    setRandom(Math.floor(Math.random() * 100 + 1));
    setAttempts(0);
    setUserNumber();
    setclickedNum();
  };

  const fullAttempt = () => {
    reset();
    setGameOver(false);
  };

  return (
    
    <SubParent>
      <div className="Parent">
      <div>
        <p>
          The Monster stirs beneath the tumultuous waves, thinking of a number
          that will end the world Find the secret number and use it to banish
          the monster
        </p>
        <input
          placeholder="Pick A Number From 1 to 100"
          type="number"
          min="1"
          maxLength="3"
          required
          value={userNumber}
          onChange={handleChange}
          style={{ maxLength: 3 }}
        />

       <br />
        <br />
        <Butt type="submit" onClick={compare}>
          Banish
        </Butt>
        <br />
        <Butt type="reset" onClick={fullAttempt}>
          Play again
        </Butt>

                    {/* clickedNum = number(clickedNum)
                  {(clickedNum - random) < 5 ? <p>  too close  ⬆️add(0-4)</p>     : <p></p>}
                 {(clickedNum - random) < -5 ? <p>  too close  ⬇️subtract(0-4)</p>     : <p></p>}  */}


        {clickedNum > random ? <p> Too Strong ⬇️ Go Down
          <br/><br/> That was so far off it banished some other unrelated elder beast!
        </p> : <p></p>}
        {clickedNum < random ? <p> Too Weak ⬆️ Go Up
          <br/><br/> That was so far off it banished some other unrelated elder beast!
        </p> : <p></p>}
        {clickedNum == random ? (
          <b> "Correct Answer" <br/> ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 <br/> You did it </b>
        ) : (
          <p> {console.log(random)}</p>
        )}
        <div>
          {gameOver && (<b> You have failed <br /> The world ends! <br /> Game over</b>)}
        </div>
        <p> Your attempts : {attempts} </p>
      </div>
      </div>
    </SubParent>
    
  );
}

export default App;
