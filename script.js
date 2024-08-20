const wordInputField = document.getElementById("inputText");
const palindromeChecker = document.getElementById("checkButton");
const resultText = document.getElementById("result");

function checkPalindrome(inputTxt) {
    let originalInput = inputTxt.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedInput = originalInput.split('').reverse().join('');

    if (originalInput === reversedInput) {
        resultText.innerText = `${inputTxt} is a palindrome🙂`;
    } else {
        resultText.innerText = `${inputTxt} is not a palindrome🙁`;
    }
};

function handleCheck() {
    let inputTxt = wordInputField.value;

    if (inputTxt.trim() === '') {
        alert('Please enter some text');
        return;
    }

    checkPalindrome(inputTxt);
};

palindromeChecker.addEventListener("click", handleCheck);


wordInputField.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        handleCheck();
        e.preventDefault();
    }
});