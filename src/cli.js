import readlineSync from 'readline-sync';

export const name = () => {
    console.log("Welcome to the Brain Games!");
    const askName = readlineSync.question('May I have your name? ');
    return askName;
}; 