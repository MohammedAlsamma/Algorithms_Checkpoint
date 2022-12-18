/* write an algorithm that read a sentence, which ends with a point, character by character, and to determine:

The length of the sentence (the number of characters).
The number of words in the sentence (assuming that the words are separated by a single space).
The number of vowels in the sentence.

You have to keep in mind that: 

Each character will be treated separately.
The last character is the point.
Use three variables as counters.
 */

//PSuedoCode:

/*
ALGORITHIM read_sentence
VAR
str: STRING:= 'Who let the dogs out ?';
CONST
vowels: ARRAY:= ['a', 'e', 'i', 'o', 'u'];

BEGIN

FUNCTION numOfWords(sentence){
    This function will convert the string in to an array.
    Then it will count the indecies and log it to console.

end
}

FUNCTION vowelsCount(sentence){
    Declare a counter and set it to zero.
    loop through each word in the sentence and lower case the sentence. 
    create a condition to check if the word contains a vowels. 
    if it does then add to count.
    log into the console the count variable.

end
}

Write number of characters. 
Call numOfWords FUNCTION and pass the in argument.
Call vowelsCount FUNCTION and pass the in argument.

END
*/


var str = 'Who let the dogs out ?';
const vowels = ['a', 'e', 'i', 'o', 'u'];

function numOfWords(sentence) {
    const array = sentence.split(' ');
    console.log(`Number of words: ${array.length}`);
}

function vowelsCount(sentence) {
    let count = 0;
    for (let char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    console.log(`Number of vowels: ${count}`);
}
console.log(`Number of Characters: ${str.length}`);
numOfWords(str);
vowelsCount(str);

