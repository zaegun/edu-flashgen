import React from 'react'
import {useState} from 'react'

let randomNum = () => Math.floor(Math.random() * 10)

const data = {
    firstNum: 0,
    secondNum: 0,
    operator: "",
    get numOne() {return this.firstNum},
    get numTwo() {return this.secondNum},
    get answer() {return this.operator}
}

function evaluate() {
    if(data.numOne === data.numTwo) {
        return "="
    }
    else if (data.numOne < data.numTwo) {
        return "<"
    }
    else {
        return ">"
    }
}

function generate() {
    data.firstNum = randomNum()
    data.secondNum = randomNum()
    data.operator = evaluate()
}

function OpFunc() {
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

export default OpFunc