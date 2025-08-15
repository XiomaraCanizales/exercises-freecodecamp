// DOM elements
const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const result = document.getElementById("result")

// decimal to binary conversion


const decimalToBinary = (input) => {
/* 
    ***EASY, no recursion***
    const inputs = []
    const quotients = []
    const remainders = []

    if (input === 0) {
        result.innerHTML = "0"
        return
    }
    
    while (input > 0) {
        const quotient = Math.floor(input / 2)
        const remainder = input % 2
        inputs.push(input)
        quotients.push(quotient)
        remainders.push(remainder)

        input = quotient
    }

    result.innerText = remainders.reverse().join("")
*/

    // ***RECURSION w. input***
    /* let binary = ""

    if (input === 0) {
        binary = "0"
    }

    while (input > 0) {
        binary = (input % 2) + binary
        input = Math.floor(input / 2)
    }

    result.innerText = binary  */

    // ***RECURSION w. function***
    if (input === 0 || input === 1) {
        return String(input)
    } else {
        return decimalToBinary(Math.floor(input/2)) + (input % 2)
    }
} 


// check for user's input
const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value)
    if (
        !numberInput.value ||
        isNaN(inputInt) ||
        inputInt < 0
    ) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }

    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";
}

convertBtn.addEventListener("click", checkUserInput)
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput()
    }
})