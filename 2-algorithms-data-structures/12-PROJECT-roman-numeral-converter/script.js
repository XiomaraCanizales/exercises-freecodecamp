const numberInput = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const result = document.getElementById("output")

// check user's input
const checkUserInput = () => {
    const inputInt = numberInput.value

    if (!inputInt || isNaN(inputInt)) {
        result.textContent = "Please enter a valid number"
        return
    }

    if (inputInt < 1) {
        result.textContent = "Enter a number greater than or equal to 1"
        return
    }

    if (inputInt >= 4000) {
        result.textContent = "Enter a number less than or equal to 3999"
        return
    }

    romanConvertion(inputInt)
}

// convertion function
const romanConvertion = (x) => {

    const lookup = [
        {value: 1000, symbol: "M"},
        {value: 900, symbol: "CM"},
        {value: 500, symbol: "D"},
        {value: 400, symbol: "CD"},
        {value: 100, symbol: "C"},
        {value: 90, symbol: "XC"},
        {value: 50, symbol: "L"},
        {value: 40, symbol: "XL"},
        {value: 10, symbol: "X"},
        {value: 9, symbol: "IX"},
        {value: 5, symbol: "V"},
        {value: 4, symbol: "IV"},
        {value: 1, symbol: "I"},
    ]

    // convertion
    let convert = ""
    for (let i = 0; i < lookup.length; i++) {
        while (x>= lookup[i].value) {
            convert += lookup[i].symbol
            x -= lookup[i].value
        }
    }

    result.textContent = convert
}

// call the funcion
convertBtn.addEventListener("click", checkUserInput)
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput()
    }
})