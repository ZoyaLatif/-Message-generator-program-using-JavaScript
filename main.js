let randomize = () => {
    // an array of the quotes given as the output//
    let messages = ['Success is a lousy teacher. It seduces smart people into thinking they can\'t- Bill Gates', 
    'Your time is limited, so don\'t waste it living someone else\'s life- Steve Jobs', 
    'Be humble in victory or defeat- Conor McGregor', 'I like criticism. It makes me stronger- LeBron James',]
    // an array of numbers which will be given as the output
    let numbers = [1,2,3,4,5,6,7,8,9]
    let randomMesage = messages[Math.floor(Math.random(message.length))]
    let randomNum = numbers[Math.floor(Math.random(numbers.length))]

    const output = "Your motivational speech is "  + randomMessage + " and your number is " + randomNum;

    return output

}
console.log(randomize())
