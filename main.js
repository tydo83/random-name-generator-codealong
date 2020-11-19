const readline = require('readline');


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let names = [];

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const printRandomName = () => {
    console.log(randomElement(names) + ' is your random name!\n\n');
    interface.question('Type 1 to get a random name, 2 to add a name to the list. Anything else quits.\n\n', handleAnswer);
}

const addName = () => {
}

const handleAnswer = (answer) => {
    if (answer === '1') {
        printRandomName();
    } else if (answer === '2') {
        interface.question('What name would you like to add?\n\n', addName)
    } else {
        console.log('Quitting...');
        interface.close();
    }
}

interface.question('Type 1 to get a random name, 2 to add a name to the list. Anything else quits.\n\n', handleAnswer);
