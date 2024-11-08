const countWordOccurrences = (sentence: string, word: string): void => {
    const sentence_lowerCase = sentence.toLowerCase();
    const word_lowerCase = word.toLowerCase();

    const splitted_sentence = sentence_lowerCase.split(" ");

    let counter: number = 0;

    splitted_sentence.forEach((element) => {
        if (element === word_lowerCase) {
            counter++;
        }
    });

    console.log(counter);
    // return counter;
};
