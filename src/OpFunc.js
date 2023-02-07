let randomNum = () => Math.floor(Math.random() * 10)

export const data = {
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

export default function generate() {
    data.firstNum = randomNum()
    data.secondNum = randomNum()
    data.operator = evaluate()
}
