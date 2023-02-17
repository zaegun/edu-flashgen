
import './App.css';
import generate, {data} from './OpFunc.js';
import {useState} from 'react';

function App() {
  const [visible, setVisible] = useState(true)
  const [buttonText, setButtonText] = useState('Start')
  const numOne = data.numOne
  const [numOneText, setOneText] = useState(numOne)
  const numTwo = data.numTwo
  const [numTwoText, setTwoText] = useState(numTwo)
  const answer = data.answer
  const [answerText, setAnswerText] = useState(answer)

  function setTransparent() {
    setVisible(!visible)
  }

  function buttonClick() {
    generate()
    setTransparent(0)
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
          <li className={visible ? 'answer--show' : 'answer--hide'}>{answerText}</li>
          <li>{numTwoText}</li>
        </ul>
        <button onClick={(event) => setTransparent()} className={!visible ? 'show' : 'hide'} id="check--button">Check</button>
        <button onClick={buttonClick} className={visible ? 'show' : 'hide'} id="next--button">{buttonText}</button>
      </header>
    </div>
  );
}

export default App;
