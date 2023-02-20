import React from 'react'
import {useState} from 'react'

let randomNum = () => Math.floor(Math.random() * 10)

const addData = {
    firstNum: 0,
    secondNum: 0,
    get numOne() {return this.firstNum},
    get numTwo() {return this.secondNum},
    get answer() {return this.firstNum + this.secondNum}
}

function generate() {
    addData.firstNum = randomNum()
    addData.secondNum = randomNum()
}

function AddFunc() {
    const [visible, setVisible] = useState(true)
    const [buttonText, setButtonText] = useState('Start')
    const numOne = addData.numOne
    const [numOneText, setOneText] = useState(numOne)
    const numTwo = addData.numTwo
    const [numTwoText, setTwoText] = useState(numTwo)
    const answer = addData.answer
    const [answerText, setAnswerText] = useState(answer)
  
    function setTransparent() {
      setVisible(!visible)
    }
  
    function buttonClick() {
      generate()
      setTransparent(0)
      setButtonText("Next")
      setOneText(addData.numOne)
      setTwoText(addData.numTwo)
      setAnswerText(addData.answer)
    }
  
    return (
      <div className="App">
        <header className="App-header">
            <div className="arith--box">
                <span>{numOneText}</span>
                <span>+ {numTwoText}</span>
                <hr></hr>
                <span className={visible ? 'answer--show' : 'answer--hide'}>{answerText}</span>
            </div>

            <button onClick={(event) => setTransparent()} className={!visible ? 'show' : 'hide'} id="check--button">Check</button>
            <button onClick={buttonClick} className={visible ? 'show' : 'hide'} id="next--button">{buttonText}</button>
        </header>
      </div>
    )
  }

export default AddFunc