const numberInput = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const result = document.getElementById("output")

// check for user's input
const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value)
    if (
        !numberInput.value ||
        isNaN(inputInt) ||
        inputInt < 1
    ) {
        result.textContent = "Please enter a number greater than or equal to 1"
        setTimeout(() => deleteInput(), 800)
        return
    }

    if (inputInt >= 4000) {
        result.textContent = "Please enter a number less than or equal to 3999"
        setTimeout(() => deleteInput(), 800)
        return
    }

    romanConvertion()
}

convertBtn.addEventListener("click", checkUserInput)

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput()
    }
})

// delete user's input if wrong
const deleteInput = () => {
    numberInput.value = ""
    result.textContent = ""
}

// convertion function
const romanConvertion = () => {
    alert("nice, up next!!!")
}