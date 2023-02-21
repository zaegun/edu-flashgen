import React from 'react'
import {useState} from 'react'

let randomNum = () => Math.floor(Math.random() * 10)
let gradeLevel = 1

const subData = {
    firstNum: 0,
    secondNum: 0,
    get numOne() {return this.firstNum},
    get numTwo() {return this.secondNum},
    get answer() {return this.firstNum - this.secondNum}
}

function generate() {
    subData.firstNum = randomNum()
    subData.secondNum = randomNum()
    evaluate()
  }
  
function evaluate() {
  if (gradeLevel < 2 && subData.firstNum < subData.secondNum) {
    let tempData = subData.firstNum
    subData.firstNum = subData.secondNum
    subData.secondNum = tempData
  }
}

function SubFunc() {
    const [visible, setVisible] = useState(true)
    const [buttonText, setButtonText] = useState('Start')
    const numOne = subData.numOne
    const [numOneText, setOneText] = useState(numOne)
    const numTwo = subData.numTwo
    const [numTwoText, setTwoText] = useState(numTwo)
    const answer = subData.answer
    const [answerText, setAnswerText] = useState(answer)
  
    function setTransparent() {
      setVisible(!visible)
    }
  
    function buttonClick() {
      generate()
      setTransparent(0)
      setButtonText("Next")
      setOneText(subData.numOne)
      setTwoText(subData.numTwo)
      setAnswerText(subData.answer)
    }
  
    return (
      <div className="App">
        <header className="App-header">
            {generate()}
            <div className="arith--box">
                <span>{numOneText}</span>
                <span>- {numTwoText}</span>
                <hr></hr>
                <span className={visible ? 'answer--show' : 'answer--hide'}>{answerText}</span>
            </div>

            <button onClick={(event) => setTransparent()} className={!visible ? 'show' : 'hide'} id="check--button">Check</button>
            <button onClick={buttonClick} className={visible ? 'show' : 'hide'} id="next--button">{buttonText}</button>
        </header>
      </div>
    )
  }

export default SubFunc