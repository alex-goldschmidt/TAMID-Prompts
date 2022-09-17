function isPalindrome(string) {
    const stringLength = string.length;
    // loop through half of the string
    for (let i = 0; i < stringLength / 2; i++) {
        // check if first and last string are same
        if (string[i] !== string[stringLength - 1 - i]) {
            alert('It is not a palindrome');
        }
    }
    alert('It is a palindrome')
}
const string = prompt('Enter a string: ');
const value = isPalindrome(string);
