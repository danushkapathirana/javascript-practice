const topic = "async operation"

const displayTopic = () => { //sync code
    console.log(topic);
}

const getSum = (number1, number2) => { //sync code
    return number1 + number2
}

const num = Array.from(Array(10).keys())
setTimeout(() => { //async code
    num.forEach((value) => {
        console.log("Array index: ", value)
    })
}, 3000)

displayTopic() //sync code call

console.log("Summation:", getSum(10, 20)); //sync code call

for(let i=0; i<100; i++) { //sync code; for loop is blocking the code
    console.log(getSum(i, i*2));
}

let i = 0
setInterval(() => {
    console.log(i++, "second");
}, 1000)

// Try to think of the output in the console
// How to clear setInterval() and setTimeout()
