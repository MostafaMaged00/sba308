const longString = `
A renowned British crocodile expert has been jailed for 10 years and five months in Australia, after admitting to sexually abusing dozens of dogs, in a case which horrified the nation.

Warning: This story contains details readers might find distressing

Adam Britton, a leading zoologist who has worked on BBC and National Geographic productions, pleaded guilty to 56 charges relating to bestiality and animal cruelty.

He also admitted to four counts of accessing child abuse material.

The Northern Territory (NT) Supreme Court heard the 53-year-old filmed himself torturing the animals until almost all died, and then shared the videos online under pseudonyms.

`

// console.log(longString.length)
function splitStringBy100Chars(longString) {
    // Check if the input is a valid string
    if (typeof longString !== 'string') {
      throw new TypeError('Expected a string as input');
    }
  
    // Remove all newline characters
    longString = longString.replace(/\n/g, '');  // Removes all '\n' (newlines)
  
    const maxLength = 100;  // Maximum length for each chunk
    const result = [];  // Array to hold the string chunks
  
    // Loop through the string and split it into chunks of 100 characters
    for (let i = 0; i < longString.length; i += maxLength) {
      result.push(longString.slice(i, i + maxLength));  // Add each chunk to the result array
    }
  
    return result;  // Return the array of string chunks
  }

let x = splitStringBy100Chars(longString)

console.log(x)