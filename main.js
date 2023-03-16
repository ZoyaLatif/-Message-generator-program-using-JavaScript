let randomize = () => {
    // an array of the quotes given as the output//
    let messages = ['Have no fear of perfection -- you’ll never reach it.\'t- Salvador Dali, artist', 
    'Every great design begins with an even better story.- Lorinda Mamo', 
    'Design creates culture. Culture shapes values. Values determine the future- Robert L.',
    'Design is not just what it looks like and feels like. Design is how it works.-Steve Jobs']
    // an array of numbers which will be given as the output
    let numbers = [1,2,3,4,5,6,7,8,9]
    let randomMesage = messages[Math.floor(Math.random(message.length))]
    let randomNum = numbers[Math.floor(Math.random(numbers.length))]

    const output = "Your motivational speech is "  + randomMessage + " and your number is " + randomNum;

    return output

}
console.log(randomize())
