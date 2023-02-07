import logo from './logo.svg';
import './App.css';
import generate, {data} from './OpFunc.js';
import {useState} from 'react';

function App() {
  const [buttonText, setButtonText] = useState('Start')
  const numOne = data.numOne
  const [numOneText, setOneText] = useState(numOne)
  const numTwo = data.numTwo
  const [numTwoText, setTwoText] = useState(numTwo)
  const answer = data.answer
  const [answerText, setAnswerText] = useState(answer)


  function buttonClick() {
    generate()
    setButtonText("Next")
    setOneText(data.numOne)
    setTwoText(data.numTwo)
    setAnswerText(data.answer)
  }

  return (
    <div className="App">
      <header className="App-header">
        {generate()}
        <ul id="op-data">
          <li>{numOneText}</li>
          <li>{answerText}</li>
          <li>{numTwoText}</li>
        </ul>
        <button onClick={buttonClick}>{buttonText}</button>
      </header>
    </div>
  );
}

export default App;
