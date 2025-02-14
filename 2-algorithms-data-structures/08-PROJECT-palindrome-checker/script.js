const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")


function checkPalidrome(str) {
    // Regular expression to match all special characters except alphanumeric and underscore
    const cleanWord = str.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase()
    return cleanWord === cleanWord.split("").reverse().join("")
  }

checkBtn.addEventListener("click", () => {
    if (textInput.value == "") {
        alert("Please input a value")
    }
    if (textInput.value.length == 1) {
        result.textContent = `${textInput.value} is a palindrome`
    }
    if (textInput.value.length > 1) {
        if (checkPalidrome(textInput.value)) {
            result.textContent = `${textInput.value} is a palindrome`
        } else {
            result.textContent = `${textInput.value} is not a palindrome`
        }
    }
})
