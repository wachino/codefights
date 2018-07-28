function checkPalindrome(inputString) {
    return inputString === inputString.split('').reverse().join('');
}